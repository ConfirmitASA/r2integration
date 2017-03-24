require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import TransformMenuAt from "./navigation/menu-transformer";

window.Reportal = window.Reportal || {};
window.Reportal.state = window.Reportal.state || {};

window.addEventListener('DOMContentLoaded',()=>{
  MDHierarchy.upgrade();

  window.Reportal.state.TransformMenuAt = new TransformMenuAt(768)
});
