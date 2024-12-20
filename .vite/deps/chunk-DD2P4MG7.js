import {
  isMuiElement
} from "./chunk-TAIYTP2M.js";

// node_modules/@mui/material/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@mui/material/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

export {
  isFilled,
  isAdornedStart,
  isMuiElement_default
};
//# sourceMappingURL=chunk-DD2P4MG7.js.map
