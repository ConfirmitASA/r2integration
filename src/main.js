import './main.css';
import MDHierarchy from './hierarchy/hierarchy';
import TransformMenuAt from './navigation/menu-transformer';
import SideNav from './side-nav/side-nav';
import sendFilters from './r2/sendFilters';

window.Reportal = {
  ...(window.Reportal || {}),
  TransformMenuAt,
  SideNav,
  hierarchyUpgrade: MDHierarchy.upgrade,
  sendFilters,
};
