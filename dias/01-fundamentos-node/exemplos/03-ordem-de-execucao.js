// Rode com: node 03-ordem-de-execucao.js
// Antes de rodar, tente PREVER a ordem dos logs. Depois confira.

console.log('1. código síncrono (call stack)');

setTimeout(() => console.log('5. setTimeout 0 (fase timers)'), 0);

setImmediate(() => console.log('6. setImmediate (fase check)'));

Promise.resolve().then(() => console.log('4. Promise.then (microtask)'));

process.nextTick(() => console.log('3. process.nextTick (roda antes das Promises)'));

console.log('2. mais código síncrono');

// Regra: todo o código síncrono roda primeiro. Depois as microtasks
// (nextTick e depois Promises). Só então o event loop entra nas fases.
// Obs.: no script principal, a ordem entre setTimeout(0) e setImmediate
// pode variar; dentro de um callback de I/O, setImmediate sempre vem antes.
