export const checkEmptyObject = (anObject) =>
  anObject &&
  Object.keys(anObject).length === 0 &&
  Object.getPrototypeOf(anObject) === Object.prototype
