# Quick Model Checklist

Use this checklist when preparing a new model for the configurator.

## ✅ Pre-Upload

- [ ] File is `.glb` format
- [ ] File size is reasonable (see guidelines below)
- [ ] Model optimized when possible (Draco compression, texture optimization)
- [ ] Model centered at origin (0,0,0)
- [ ] Model properly oriented (upright, facing forward)
- [ ] All textures embedded in GLB

**File Size Guidelines:**
- Small/Simple: < 5MB (ideal)
- Medium/Detailed: 5-15MB (acceptable)
- Large/Complex: 15-30MB (acceptable)
- Very Large: > 30MB (acceptable, optimize if possible)

*Note: File sizes can vary significantly. Focus on model quality and proper component naming.*

## ✅ Component Naming

**Required:**
- [ ] At least one mesh contains `sole`, `insole`, `bottom`, or `base` → **SOLE**
- [ ] At least one mesh contains `upper`, `suede`, `leather`, `body`, `main`, or `normal` → **UPPER**

**Recommended:**
- [ ] Mesh with `lining`, `satin`, `inner`, or `inside` → **LINING**
- [ ] Mesh with `eyelets`, `holes`, `grommets`, or `metal` → **EYELETS**

**Optional:**
- [ ] `midsole`, `mid`, `middle` → **MIDSOLE**
- [ ] `outsole`, `outer_sole`, `tread` → **OUTSOLE**
- [ ] `lace`, `laces`, `shoelace`, `string` → **LACES**
- [ ] `tongue`, `tongue_pad` → **TONGUE**
- [ ] `heel`, `heel_tab`, `back_tab` → **HEEL_TAB**
- [ ] `logo`, `brand`, `badge`, `emblem` → **LOGO**

## ✅ Scale Calculation

- [ ] Measure model's bounding box dimensions
- [ ] Calculate scale: `0.4 / (model's largest dimension)`
- [ ] Or compare to reference model (0.0033 scale)
- [ ] Document original size and calculated scale
- [ ] Test scale in configurator and adjust if needed

**Reference:**
- Working model scale: `0.0033` (original was ~120 units, scaled to ~0.4 units)
- Target display size: ~0.3-0.5 units in Three.js scene

## ✅ Testing

- [ ] Upload to Cloudflare R2
- [ ] Test in configurator page
- [ ] Check browser console for component detection
- [ ] Verify all expected components appear in selector
- [ ] Test material swapping on each component
- [ ] Verify scale is correct (model appears ~0.3-0.5 units)
- [ ] Adjust scale if needed

## 📝 Quick Reference

**Current Working Model**: `unbranded_white_sneaker.glb`
- Original Scale: `1.0` (default GLB)
- Applied Scale: `0.0033` (330x smaller)
- Scale Calculation: Original ~120 units → Target 0.4 units = 0.0033
- Components: Upper (6), Sole (2), Lining (1), Eyelets (1)

**Scale Formula:**
```
Scale Factor = Target Size (0.4) / Original Model Size
Example: 0.4 / 120 = 0.0033
```

**Component Mapper**: `client/lib/componentMapper.ts`
**Config Pages**: `client/app/configurator/blank/page.tsx` or `branded/page.tsx`

---

📖 See `MODEL_PREPARATION_TEMPLATE.md` for detailed documentation.

