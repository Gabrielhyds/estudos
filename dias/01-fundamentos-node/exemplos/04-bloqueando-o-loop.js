// Rode com: node 04-bloqueando-o-loop.js
// Mostra o que acontece quando você trava a thread principal com CPU pesada.

const inicio = Date.now();

setTimeout(() => {
  console.log(`Timer de 100ms disparou depois de ${Date.now() - inicio}ms 😱`);
}, 100);

// Loop pesado de ~2 segundos: nada mais consegue rodar enquanto isso.
while (Date.now() - inicio < 2000) {
  // ocupando a CPU...
}
console.log('Terminei o trabalho pesado.');
// O timer era de 100ms, mas só roda após ~2000ms: o event loop estava bloqueado.
