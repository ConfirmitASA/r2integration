require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import MenuTransformer from "./navigation/menu-transformer";

window.addEventListener('DOMContentLoaded',()=>{
  window.Reportal = window.Reportal || {};
  window.Reportal.state = window.Reportal.state || {};
  let state = window.Reportal.state;
  state.hierarchy = new MDHierarchy(); //setup listeners for hierarchy component on open and scrim click
  state.menuTransformer = new MenuTransformer();
});
