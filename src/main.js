require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import TransformMenuAt from "./navigation/menu-transformer";

window.Reportal = window.Reportal || {};
window.Reportal.TransformMenuAt = TransformMenuAt;
window.Reportal.hierarchyUpgrade = MDHierarchy.upgrade;
