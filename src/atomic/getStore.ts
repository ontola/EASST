import { Store } from '@tomic/lib';
import { ATOMIC_SERVER_URL } from 'astro:env/client';
import { initOntologies } from '../ontologies';

let store: Store;
export function getStore() {
  if (!store) {
    store = new Store({
      serverUrl: ATOMIC_SERVER_URL,
    });

    initOntologies();
  }

  return store;
}
