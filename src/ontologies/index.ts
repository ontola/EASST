/* -----------------------------------
 * GENERATED WITH @tomic/cli
 * -------------------------------- */

import { registerOntologies } from '@tomic/lib';

import { website } from './website.js';

export function initOntologies(): void {
  registerOntologies(website);
}
