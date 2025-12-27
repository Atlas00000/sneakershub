/**
 * Model Analysis Script
 * 
 * This script analyzes all models to identify which ones have multiple meshes
 * that can be used for component-based customization.
 * 
 * Run this in the browser console on the configurator page after selecting each model.
 * Or use the automated browser testing approach.
 */

const models = [
  { id: 'unbranded_white_sneaker', name: 'Unbranded White Sneaker', checked: true },
  { id: 'green_white_shoes_headphones', name: 'Green and White Shoes with Headphones', checked: true },
  { id: 'white_blue_basketball_shoe', name: 'White and Blue High-Top Basketball Shoe', checked: false },
  { id: 'brown_sneakers', name: 'Brown Sneakers', checked: false },
  { id: 'white_sneakers', name: 'White Sneakers', checked: false },
  { id: 'sneakers', name: 'Sneakers (Generic)', checked: false },
  { id: 'sneaker_3d_design_exercise', name: 'Sneaker 3D Design Exercise', checked: false },
  { id: 'sneaker_1_5mb', name: 'Sneaker (1.5MB)', checked: false },
  { id: 'adidas_nmd_r1_v2', name: 'Adidas NMD R1 V2', checked: false },
  { id: 'air_jordan_1_chicago_black_toe', name: 'Air Jordan 1 Chicago Black Toe', checked: false },
  { id: 'camo_vans', name: 'Camo Vans', checked: false },
  { id: 'on_cloudrunner_white_orange', name: 'On Cloudrunner White/Orange', checked: false },
];

console.log('Models to analyze:', models.filter(m => !m.checked).length);

