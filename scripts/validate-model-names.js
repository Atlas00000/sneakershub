#!/usr/bin/env node

/**
 * Model Name Validation Script
 * 
 * This script helps validate mesh names in a GLB file to ensure
 * they follow the component naming conventions.
 * 
 * Usage:
 *   node scripts/validate-model-names.js <path-to-model.glb>
 * 
 * Or provide mesh names directly:
 *   node scripts/validate-model-names.js --names "Mesh1,Mesh2,Mesh3"
 */

const fs = require('fs');
const path = require('path');

// Component patterns (must match componentMapper.ts)
const COMPONENT_PATTERNS = {
  SOLE: ['sole', 'insole', 'bottom', 'base'],
  UPPER: ['upper', 'suede', 'leather', 'body', 'main', 'normal'],
  MIDSOLE: ['midsole', 'mid', 'middle'],
  OUTSOLE: ['outsole', 'outer_sole', 'tread'],
  LACES: ['lace', 'laces', 'shoelace', 'string'],
  LOGO: ['logo', 'brand', 'badge', 'emblem'],
  HEEL_TAB: ['heel', 'heel_tab', 'back_tab'],
  TONGUE: ['tongue', 'tongue_pad'],
  EYELETS: ['eyelets', 'holes', 'grommets', 'metal'],
  LINING: ['lining', 'satin', 'inner', 'inside'],
};

function mapMeshToComponent(meshName) {
  const lowerName = meshName.toLowerCase().trim();

  for (const [componentType, patterns] of Object.entries(COMPONENT_PATTERNS)) {
    if (componentType === 'UNKNOWN') continue;
    
    for (const pattern of patterns) {
      if (lowerName.includes(pattern)) {
        return componentType;
      }
    }
  }

  return 'UNKNOWN';
}

function validateMeshNames(meshNames) {
  const results = {
    detected: {},
    unknown: [],
    warnings: [],
    summary: {
      total: meshNames.length,
      detected: 0,
      unknown: 0,
      required: { sole: false, upper: false },
    },
  };

  meshNames.forEach((name) => {
    const componentType = mapMeshToComponent(name);
    
    if (componentType === 'UNKNOWN') {
      results.unknown.push(name);
      results.summary.unknown++;
    } else {
      if (!results.detected[componentType]) {
        results.detected[componentType] = [];
      }
      results.detected[componentType].push(name);
      results.summary.detected++;
      
      // Check required components
      if (componentType === 'SOLE') {
        results.summary.required.sole = true;
      }
      if (componentType === 'UPPER') {
        results.summary.required.upper = true;
      }
    }
  });

  // Generate warnings
  if (!results.summary.required.sole) {
    results.warnings.push('⚠️  No SOLE component detected (required)');
  }
  if (!results.summary.required.upper) {
    results.warnings.push('⚠️  No UPPER component detected (required)');
  }
  if (results.summary.unknown > 0) {
    results.warnings.push(`⚠️  ${results.summary.unknown} mesh(es) not recognized (will be marked as UNKNOWN)`);
  }

  return results;
}

function printResults(results) {
  console.log('\n📊 Component Detection Results\n');
  console.log('═'.repeat(50));
  
  // Detected components
  if (Object.keys(results.detected).length > 0) {
    console.log('\n✅ Detected Components:');
    Object.entries(results.detected).forEach(([type, meshes]) => {
      console.log(`\n  ${type} (${meshes.length} mesh${meshes.length > 1 ? 'es' : ''}):`);
      meshes.forEach((mesh) => {
        console.log(`    - ${mesh}`);
      });
    });
  }

  // Unknown meshes
  if (results.unknown.length > 0) {
    console.log('\n❓ Unknown Meshes:');
    results.unknown.forEach((mesh) => {
      console.log(`    - ${mesh}`);
      console.log(`      → Suggestion: Add component pattern to componentMapper.ts`);
    });
  }

  // Summary
  console.log('\n📈 Summary:');
  console.log(`  Total meshes: ${results.summary.total}`);
  console.log(`  Detected: ${results.summary.detected}`);
  console.log(`  Unknown: ${results.summary.unknown}`);
  console.log(`  Selectable components: ${Object.keys(results.detected).length}`);

  // Warnings
  if (results.warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    results.warnings.forEach((warning) => {
      console.log(`  ${warning}`);
    });
  }

  // Status
  console.log('\n' + '═'.repeat(50));
  const hasRequired = results.summary.required.sole && results.summary.required.upper;
  if (hasRequired && results.summary.unknown === 0) {
    console.log('✅ Model validation PASSED - Ready for upload!');
  } else if (hasRequired) {
    console.log('⚠️  Model validation PASSED with warnings');
  } else {
    console.log('❌ Model validation FAILED - Missing required components');
  }
  console.log('═'.repeat(50) + '\n');
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage:');
  console.log('  node scripts/validate-model-names.js --names "Mesh1,Mesh2,Mesh3"');
  console.log('  node scripts/validate-model-names.js <path-to-model.glb>');
  console.log('\nExample:');
  console.log('  node scripts/validate-model-names.js --names "Cube005_WhiteSole_0,Cube006_WhiteSuede_0"');
  process.exit(1);
}

if (args[0] === '--names' && args[1]) {
  // Validate provided names
  const meshNames = args[1].split(',').map((n) => n.trim());
  const results = validateMeshNames(meshNames);
  printResults(results);
} else {
  // Try to load GLB file (would need gltf-transform or similar)
  const filePath = args[0];
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  console.log('📦 GLB file parsing not yet implemented.');
  console.log('💡 For now, extract mesh names manually and use:');
  console.log(`   node scripts/validate-model-names.js --names "Mesh1,Mesh2,Mesh3"`);
  console.log('\n💡 To extract mesh names from GLB:');
  console.log('   1. Open in gltf.report or Three.js editor');
  console.log('   2. Copy mesh names');
  console.log('   3. Use --names flag with comma-separated list');
}

