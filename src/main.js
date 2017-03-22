require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import MenuTransformer from "./navigation/menu-transformer";

window.addEventListener('DOMContentLoaded',()=>{
  MDHierarchy.upgrade();

  window.Reportal = window.Reportal || {};
  window.Reportal.state = window.Reportal.state || {};
  window.Reportal.state.menuTransformer = new MenuTransformer({breakpoint:768})
});
