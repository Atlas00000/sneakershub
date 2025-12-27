# Model Preparation Template & Checklist

This template ensures all new 3D models are properly prepared and integrated into the configurator system. Based on the working model: `unbranded_white_sneaker.glb`

## 📋 Pre-Upload Checklist

### ✅ File Requirements
- [ ] Model file is in **GLB format** (`.glb` extension)
- [ ] File size is reasonable for web delivery (see File Size Guidelines below)
- [ ] Model optimized when possible (compression, texture optimization)
- [ ] Model is properly scaled (units: meters or appropriate scale)
- [ ] Model is centered at origin (0, 0, 0)
- [ ] Model is oriented correctly (facing forward, upright)
- [ ] All textures are embedded in GLB (no external texture files)
- [ ] Model has been tested in a GLB viewer (e.g., gltf.report, Three.js editor)

#### File Size Guidelines
Model file sizes can vary significantly based on complexity, detail level, and texture quality. The following are flexible guidelines:

**Recommended Sizes:**
- **Small/Simple Models**: < 5MB (ideal for fast loading)
- **Medium/Detailed Models**: 5-15MB (acceptable, common for detailed shoes)
- **Large/Complex Models**: 15-30MB (acceptable for high-detail models)
- **Very Large Models**: > 30MB (acceptable but consider optimization)

**Optimization Recommendations:**
- ✅ Use **Draco compression** for geometry (reduces file size by 50-90%)
- ✅ Compress textures to **WebP** or **KTX2** format
- ✅ Reduce texture resolution if appropriate (2048x2048 → 1024x1024)
- ✅ Use **LOD (Level of Detail)** variants for very large models
- ✅ Remove unnecessary geometry/vertices
- ✅ Optimize material count (combine similar materials)

**Note**: Larger files are acceptable and will work with the system. Cloudflare R2 can handle files of various sizes. Focus on model quality and proper component naming rather than strict file size limits.

### ✅ Component Naming Requirements

All meshes in the model **MUST** follow naming conventions for automatic component detection. The system uses pattern matching to identify components.

#### Required Component Types & Naming Patterns

| Component Type | Required Patterns | Example Names | Notes |
|---------------|------------------|---------------|-------|
| **Sole** | `sole`, `insole`, `bottom`, `base` | `Cube005_WhiteSole_0`, `Cube005_Insole_0` | At least one sole component required |
| **Upper** | `upper`, `suede`, `leather`, `body`, `main`, `normal` | `Cube006_WhiteSuede_0`, `Cube005_WhiteLeather_0`, `Cube004_WhiteLeather_0` | Main body of the shoe |
| **Lining** | `lining`, `satin`, `inner`, `inside` | `Plane_WhiteSatin_0` | Interior material |
| **Eyelets** | `eyelets`, `holes`, `grommets`, `metal` | `Cube002_metal_0` | Metal eyelets/hardware |
| **Midsole** | `midsole`, `mid`, `middle` | `Midsole_001`, `Mid_Main` | Optional |
| **Outsole** | `outsole`, `outer_sole`, `tread` | `Outsole_Main`, `Tread_Pattern` | Optional |
| **Laces** | `lace`, `laces`, `shoelace`, `string` | `Lace_Left`, `Shoelace_Main` | Optional |
| **Tongue** | `tongue`, `tongue_pad` | `Tongue_Main`, `TonguePad` | Optional |
| **Heel Tab** | `heel`, `heel_tab`, `back_tab` | `Heel_Tab`, `BackTab_Main` | Optional |
| **Logo** | `logo`, `brand`, `badge`, `emblem` | `Logo_Nike`, `Brand_Badge` | Optional (branded models) |

#### Naming Best Practices
- ✅ Use descriptive names: `Cube005_WhiteSole_0` (clear material/color)
- ✅ Include material type in name when possible: `WhiteSuede`, `BlackLeather`
- ✅ Use consistent naming pattern across all meshes
- ✅ Avoid special characters except underscores and hyphens
- ✅ Case-insensitive matching (but use consistent casing)

#### Current Working Example
```
unbranded_white_sneaker.glb contains:
- Cube005_WhiteSole_0        → Detected as: SOLE
- Cube005_Insole_0            → Detected as: SOLE
- Cube006_WhiteSuede_0        → Detected as: UPPER
- Cube005_WhiteLeather_0      → Detected as: UPPER
- Cube005_WhiteLeather_0_1    → Detected as: UPPER
- Cube005_Normal_0            → Detected as: UPPER
- Cube004_WhiteSuede_0        → Detected as: UPPER
- Cube004_WhiteLeather_0      → Detected as: UPPER
- Plane_WhiteSatin_0          → Detected as: LINING
- Cube002_metal_0             → Detected as: EYELETS
```

### ✅ Component Requirements

#### Minimum Required Components
- [ ] **At least 1 Sole component** (required for basic functionality)
- [ ] **At least 1 Upper component** (main body of shoe)

#### Recommended Components
- [ ] Lining (for interior customization)
- [ ] Eyelets (for hardware customization)
- [ ] Midsole (for multi-layer sole customization)
- [ ] Outsole (for tread pattern customization)

#### Optional Components
- [ ] Laces
- [ ] Tongue
- [ ] Heel Tab
- [ ] Logo (for branded models)

### ✅ Material & Texture Requirements

- [ ] All materials use **PBR (Physically Based Rendering)** workflow
- [ ] Materials are properly assigned to meshes
- [ ] Textures are embedded (no external references)
- [ ] Texture formats: WebP, PNG, or JPEG
- [ ] Recommended texture resolution: 2048x2048 or 1024x1024
- [ ] Normal maps included where appropriate
- [ ] Roughness/metallic maps included for realistic materials

### ✅ Model Quality Requirements

- [ ] Model has clean topology (no unnecessary polygons)
- [ ] No duplicate vertices or faces
- [ ] UV maps are properly unwrapped
- [ ] No overlapping UVs (or minimal overlap)
- [ ] Model renders correctly from multiple angles
- [ ] No visible seams or artifacts

### ✅ Scale Requirements & Calculation

The model scale is critical for proper display in the configurator. The scale factor is applied to the original model size.

#### Current Working Model Scale Reference
- **Model**: `unbranded_white_sneaker.glb`
- **Original Scale**: 1.0 (default GLB scale)
- **Applied Scale**: `0.0033` (330x smaller than original)
- **Target Display Size**: ~0.3-0.5 units in Three.js scene (appropriate for shoe size)

#### How to Calculate Scale for New Models

**Method 1: Measure Model Dimensions**
1. Load your model in Blender or a 3D editor
2. Measure the model's bounding box dimensions (length, width, height)
3. Calculate scale factor:
   ```
   Target Size = 0.4 units (ideal shoe size in scene)
   Scale Factor = Target Size / Original Model Size
   
   Example:
   - Original model length: 120 units
   - Target length: 0.4 units
   - Scale factor: 0.4 / 120 = 0.00333
   ```

**Method 2: Use Reference Model**
1. Compare your model's size to the working model (`unbranded_white_sneaker.glb`)
2. If your model is 2x larger: `scale = 0.0033 / 2 = 0.00165`
3. If your model is 0.5x smaller: `scale = 0.0033 / 0.5 = 0.0066`

**Method 3: Trial and Error**
1. Start with scale `1.0` (original size)
2. If model is too large, divide by 10: `0.1`
3. If still too large, divide by 10 again: `0.01`
4. Continue adjusting until model appears correct size (~0.3-0.5 units)
5. Fine-tune with smaller adjustments

#### Scale Guidelines

| Model Size (original) | Suggested Scale | Notes |
|----------------------|-----------------|-------|
| Very large (100+ units) | 0.001 - 0.005 | Large architectural or oversized models |
| Large (50-100 units) | 0.005 - 0.01 | |
| Medium (10-50 units) | 0.01 - 0.05 | |
| Small (1-10 units) | 0.05 - 0.5 | |
| Very small (<1 unit) | 0.5 - 1.0 | May need to scale up |

#### Scale Testing Checklist
- [ ] Model appears at appropriate size in viewport (~0.3-0.5 units)
- [ ] Model is not too small to see details
- [ ] Model is not too large (camera can see full model)
- [ ] Scale factor is documented in model metadata
- [ ] Scale works correctly with camera controls (zoom, pan, rotate)

#### Scale Documentation Template
When documenting your model, include:
```yaml
scale_info:
  original_size: "120 units (length)"
  original_scale: 1.0
  applied_scale: 0.0033
  scale_factor: "330x smaller"
  target_display_size: "~0.4 units"
  calculation_method: "measured bounding box"
```

## 📁 File Structure

### Model File Location
```
Root Directory/
├── {model_name}.glb          # Main model file
└── (optional) {model_name}_lod1.glb  # Lower detail version (recommended for files > 15MB)
```

**Note**: For larger models (> 15MB), consider creating LOD (Level of Detail) variants to improve loading performance. The system can load different detail levels based on camera distance or user preference.

### Upload Location
- **Cloudflare R2 Bucket**: `threejs-assets`
- **Path**: Root of bucket (no subfolders for now)
- **Public URL Format**: `https://pub-{id}.r2.dev/{model_name}.glb`

### Naming Convention
- Use lowercase with underscores: `unbranded_white_sneaker.glb`
- Include model type: `{type}_{description}.glb`
  - Examples: `blank_canvas_sneaker.glb`, `nike_air_max_90.glb`

## 🧪 Testing Checklist

### Before Upload
- [ ] Model loads in Three.js GLTFLoader
- [ ] All meshes are visible
- [ ] Materials render correctly
- [ ] Model scales appropriately (not too large/small)
- [ ] Model is centered and oriented correctly
- [ ] File size is acceptable (see File Size Guidelines above)
- [ ] Model optimized when possible (especially for files > 15MB)

### After Upload
- [ ] Model loads from Cloudflare R2 URL (may take longer for larger files)
- [ ] All components are detected correctly (check browser console)
- [ ] Component selector shows all expected components
- [ ] Material swapping works on each component type
- [ ] Model renders at correct scale in configurator
- [ ] Camera controls work properly
- [ ] No console errors or warnings
- [ ] Loading time is acceptable (consider LOD variants for very large models if needed)

### Component Detection Test
After uploading, check browser console for:
```
=== COMPONENT DETECTION SUMMARY ===
Total meshes found: X
Components by type:
  - upper: X mesh(es)
  - sole: X mesh(es)
  ...
✅ Selectable component types: X
```

## 🔧 Integration Steps

### 1. Upload Model to Cloudflare R2
```bash
# Using the upload script
node upload-to-r2.js

# Or using wrangler
wrangler r2 object put {model_name}.glb --file=./{model_name}.glb --bucket=threejs-assets
```

### 2. Update Component Mapper (if needed)
If your model uses new naming patterns not in the current mapper, update:
```
client/lib/componentMapper.ts
```
Add new patterns to `COMPONENT_PATTERNS` object.

### 3. Test in Configurator
1. Navigate to `/configurator/blank` or `/configurator/branded`
2. Update `modelPath` in the page component:
   ```tsx
   const modelPath = '{model_name}.glb';
   ```
3. Check browser console for component detection
4. Test material swapping on each component

### 4. Calculate and Set Scale
Determine the appropriate scale factor for your model (see Scale Requirements section above).

**Quick Scale Calculation:**
- Measure your model's bounding box size
- Target display size: ~0.4 units in Three.js scene
- Scale = 0.4 / (your model's largest dimension)

**Example:**
- Model length: 120 units → Scale: 0.4 / 120 = 0.0033
- Model length: 60 units → Scale: 0.4 / 60 = 0.0067
- Model length: 240 units → Scale: 0.4 / 240 = 0.0017

**Apply scale in page component:**
```tsx
<ConfiguratorViewport 
  modelPath={modelPath} 
  scale={0.0033}  // Your calculated scale factor
  position={[0, 0, 0]} 
/>
```

**Scale Testing:**
1. Start with calculated scale
2. Load model in configurator
3. If too large: reduce scale (divide by 2, 5, or 10)
4. If too small: increase scale (multiply by 2, 5, or 10)
5. Fine-tune until model appears at correct size (~0.3-0.5 units)

## 📝 Model Metadata Template

For future model management system, keep track of:

```yaml
model_id: "unbranded_white_sneaker_001"
name: "Unbranded White Sneaker"
type: "blank"  # or "branded"
brand: null  # or "Nike", "Adidas", etc.
model_url: "https://pub-{id}.r2.dev/unbranded_white_sneaker.glb"
thumbnail_url: "https://..."  # Optional
scale_info:
  original_size: "~120 units (estimated from scale factor)"
  original_scale: 1.0
  applied_scale: 0.0033
  scale_factor: "330x smaller than original"
  calculation_method: "trial and error / measured"
scale: 0.0033  # Applied scale factor
position: [0, 0, 0]
rotation: [0, 0, 0]
components:
  - type: "sole"
    count: 2
    meshes: ["Cube005_WhiteSole_0", "Cube005_Insole_0"]
  - type: "upper"
    count: 6
    meshes: ["Cube006_WhiteSuede_0", "Cube005_WhiteLeather_0", ...]
  - type: "lining"
    count: 1
    meshes: ["Plane_WhiteSatin_0"]
  - type: "eyelets"
    count: 1
    meshes: ["Cube002_metal_0"]
constraints:  # For branded models
  logo_placement: "fixed"  # or "removable"
  available_colors: []  # Optional
  material_restrictions: []  # Optional
```

## 🔄 Future Extensibility

### Adding New Component Types
1. Add new type to `ComponentType` enum in `client/types/models.ts`
2. Add display name to `ComponentDisplayNames`
3. Add patterns to `COMPONENT_PATTERNS` in `componentMapper.ts`
4. Add icon to `ComponentIcons` in `ComponentSelector.tsx`
5. Add to `COMPONENT_ORDER` array in `ComponentSelector.tsx`

### Adding New Naming Patterns
Simply update the `COMPONENT_PATTERNS` object in `componentMapper.ts`:
```typescript
[ComponentType.UPPER]: ['upper', 'suede', 'leather', 'body', 'main', 'normal', 'new_pattern'],
```

### Model Variants
- Different sizes: Use scale adjustment in code
- Different colors: Use material swapping (no model changes needed)
- Different styles: Create separate GLB files

## ⚠️ Common Issues & Solutions

### Issue: Components not detected
**Solution**: Check mesh names match patterns in `componentMapper.ts`. Update patterns if needed.

### Issue: Model too large/small
**Solution**: 
1. Calculate proper scale using formula: `Scale = 0.4 / (model's largest dimension)`
2. If model is too large: reduce scale (divide by 2, 5, or 10)
3. If model is too small: increase scale (multiply by 2, 5, or 10)
4. Reference: Working model uses `0.0033` (original ~120 units → display ~0.4 units)
5. Target display size: ~0.3-0.5 units in Three.js scene
6. Adjust `scale` prop in `ConfiguratorViewport` component

### Issue: Model not loading
**Solution**: 
- Verify Cloudflare R2 URL is correct
- Check CORS settings on R2 bucket
- Verify file was uploaded correctly

### Issue: Materials not swapping
**Solution**:
- Ensure meshes have materials assigned
- Check component type is detected correctly
- Verify material system is working (check console logs)

## 📚 Reference

### Current Working Model
- **File**: `unbranded_white_sneaker.glb`
- **Components**: 4 types (Upper, Sole, Lining, Eyelets)
- **Total Meshes**: 10
- **Original Scale**: 1.0 (default GLB scale)
- **Applied Scale**: 0.0033 (330x smaller than original)
- **Scale Calculation**: Model was ~120 units, target 0.4 units → 0.4/120 = 0.0033
- **Status**: ✅ Fully functional

### Component Mapper Location
`client/lib/componentMapper.ts`

### Model Loader Location
`client/components/viewer/ModelLoader.tsx`

### Configurator Pages
- Blank Canvas: `client/app/configurator/blank/page.tsx`
- Brand Collection: `client/app/configurator/branded/page.tsx`

---

**Last Updated**: Based on working model as of current date
**Template Version**: 1.0
**Maintainer**: Update this template as the system evolves

