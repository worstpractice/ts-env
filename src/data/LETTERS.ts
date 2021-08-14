import { LOWERCASE_LETTERS } from './LOWERCASE_LETTERS.js';
import { UPPERCASE_LETTERS } from './UPPERCASE_LETTERS.js';

export const LETTERS = [
  //
  ...LOWERCASE_LETTERS,
  ...UPPERCASE_LETTERS,
] as const;
