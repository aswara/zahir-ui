export default function getSafe(fn, defaultValue) {
  try {
      return fn();
  } catch (e) {
      return defaultValue || defaultValue === 0 ? defaultValue : null;
  }
}