"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSafe;

function getSafe(fn, defaultValue) {
  try {
    return fn();
  } catch (e) {
    return defaultValue || defaultValue === 0 ? defaultValue : null;
  }
}