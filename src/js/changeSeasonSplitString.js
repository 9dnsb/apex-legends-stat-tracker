import toTitleCase from './toTitleCase'

export const changeSeasonSplitString = (aString) =>
  toTitleCase(aString.split('_').join(' ').split('n1').join('n 1'))
