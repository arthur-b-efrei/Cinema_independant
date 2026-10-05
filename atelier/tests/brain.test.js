import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

const LIMITE = 300;

describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('').ok, false);
    assert.equal(validateMessage('   ').ok, false);
  });

  it('accepte «  salut  » avec value égal à « salut »', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });

  it('accepte 300 caractères et refuse 301', () => {
    assert.equal(validateMessage('a'.repeat(LIMITE)).ok, true);
    assert.equal(validateMessage('a'.repeat(LIMITE + 1)).ok, false);
  });
});

describe('replyTo', () => {
  it('donne la même réponse pour SALUT et salut', () => {
    assert.equal(replyTo('SALUT'), replyTo('salut'));
  });

  it('donne à « film » une réponse différente d’une phrase inconnue', () => {
    assert.notEqual(replyTo('film'), replyTo('xyz-inconnu'));
  });
});
