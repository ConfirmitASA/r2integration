class Config {
	static var Design = {
		darkPrimaryColor: "#0096e6",
		defaultPrimaryColor: "#00B0FF",
		lightPrimaryColor: "#40C4FF",
		textPrimaryColor: "#FFFFFF",
		darkAccentColor: "#43a442",
		defaultAccentColor: "#42BD41",
		lightAccentColor: "#42d641",
		primaryBackgroundColor: "#f0f2f5",
		headerBackgroundColor: "#fff"
	}
}



var darkPrimaryColor = Config.Design.darkPrimaryColor;
var defaultPrimaryColor = Config.Design.defaultPrimaryColor;
var lightPrimaryColor = Config.Design.lightPrimaryColor;
var textPrimaryColor = Config.Design.textPrimaryColor;
var darkAccentColor = Config.Design.darkAccentColor;
var defaultAccentColor = Config.Design.defaultAccentColor;
var lightAccentColor = Config.Design.lightAccentColor;
var primaryBackgroundColor = Config.Design.primaryBackgroundColor;
var headerBackgroundColor = Config.Design.headerBackgroundColor;

var str = "<style>";

str += ".select2-container.select2-container-active> .select2-choices {border-bottom: 1px solid " + defaultPrimaryColor + 
"\n;}.select2-drop>.select2-results .select2-highlighted {background: " + defaultPrimaryColor + 
"\n !important;}.reportal-tabbed-menu>.yui3-menu .css-menu-subitem.css-menu-selected>a,.reportal-tabbed-menu>.yui3-menu .css-menu-subitem.yui3-menuitem-active,    .reportal-tabbed-menu>.yui3-menu .css-menu-subitem.yui3-menu-label-active,.reportal-tabbed-menu>.yui3-menu .css-menu-subitem>.yui3-menu-label.css-menu-sublabel:hover {background-color: " + defaultPrimaryColor + 
"\n !important;}.reportal-select select:active,    .reportal-select select:focus {border-bottom-color: " + defaultPrimaryColor + 
"\n !important;}.select2-drop>.select2-results .select2-highlighted>.select2-result-label,.reportal-button.primary,.reportal-button.primary:hover,.reportal-button.accent,.reportal-button.accent:hover {color: " + textPrimaryColor + 
"\n !important;}.reportal-button:hover,.admin-menu a:hover,.vp-item-menu li>a:hover {background-color: " + primaryBackgroundColor + 
"\n;}@media all AND (min-width:0) AND (max-width:768px) {.company-logo>.logo-wrapper {background-color: " + primaryBackgroundColor + 
"\n;}}.vp-item-rename .vp-input .vp-input-cancel:hover, .vp-item-rename .vp-input .vp-input-cancel:active, .vp-item-rename .vp-input .vp-input-cancel:focus, .vp-add-item .vp-input .vp-input-cancel:hover, .vp-add-item .vp-input .vp-input-cancel:active, .vp-add-item .vp-input .vp-input-cancel:focus {background: " + primaryBackgroundColor + 
"\n;}.reportal-button.primary {background-color: " + defaultPrimaryColor + 
"\n;}.material-table>tbody>tr>td[class*=\"_rhc\"]>a:hover {color: " + defaultPrimaryColor + 
"\n;}.reportal-tabbed-menu>.yui3-menu li.css-menu-topitem.css-menu-selected>a,    .reportal-tabbed-menu>.yui3-menu li.css-menu-topitem.css-menu-child-selected>a {border-color: " + defaultPrimaryColor + 
"\n;}.reportal-button.primary:hover {background-color: " + lightPrimaryColor + 
"\n;}.reportal-button.accent,.vp-item-rename .vp-input .vp-input-save, .vp-add-item .vp-input .vp-input-save {background-color: " + defaultAccentColor + 
"\n;}.reportal-button.accent:hover {background-color: " + lightAccentColor + 
"\n;}.dd-button-select {background: " + defaultPrimaryColor + 
"\n !important;}.dd-button-select:active,  .dd-button-select:hover {background: " + darkPrimaryColor + 
"\n !important;}.dd-selected a .dd-item-text {background-color: " + lightPrimaryColor + 
"\n;}.reportal-horizontal-menu>.yui3-menu .css-menu-topitem:hover,    .reportal-horizontal-menu>.yui3-menu .css-menu-topitem.css-menu-selected {background: " + primaryBackgroundColor + 
"\n !important;}.reportal-tabbed-menu>.yui3-menu .css-menu-subitem.yui3-menuitem-active>a, .reportal-tabbed-menu>.yui3-menu .css-menu-subitem.yui3-menu-label-active>a {color: " + textPrimaryColor + 
"\n;}.reportal-header {background: " + headerBackgroundColor + 
"\n;} {background-color: " + headerBackgroundColor + 
"\n;}@media screen and (min-width:769px) {.reportal-bar {background-color: " + headerBackgroundColor + 
"\n;}}.vp-item-rename .vp-input .vp-input-save:hover, .vp-item-rename .vp-input .vp-input-save:active, .vp-item-rename .vp-input .vp-input-save:focus, .vp-add-item .vp-input .vp-input-save:hover, .vp-add-item .vp-input .vp-input-save:active, .vp-add-item .vp-input .vp-input-save:focus {background: " + darkAccentColor + 
"\n;}";

str += "</style>";

text.Output.Append(str);