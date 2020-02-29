"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = capitalize;

// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}