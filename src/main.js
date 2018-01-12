import './main.css';
import MDHierarchy from './hierarchy/hierarchy';
import TransformMenuAt from './navigation/menu-transformer';
import sendFilters from './r2/sendFilters';

window.Reportal = {
  ...(window.Reportal || {}),
  TransformMenuAt,
  hierarchyUpgrade: MDHierarchy.upgrade,
  sendFilters,
};
