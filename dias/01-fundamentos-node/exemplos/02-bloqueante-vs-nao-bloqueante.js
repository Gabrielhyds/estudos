// Rode com: node 02-bloqueante-vs-nao-bloqueante.js
// Compara leitura de arquivo síncrona (bloqueia) e assíncrona (não bloqueia).
const fs = require('node:fs');

console.log('--- Versão SÍNCRONA ---');
console.log('1. antes de ler');
const conteudoSync = fs.readFileSync(__filename, 'utf8'); // a thread PARA aqui até terminar
console.log(`2. li ${conteudoSync.length} caracteres (sync)`);
console.log('3. depois de ler');

console.log('\n--- Versão ASSÍNCRONA ---');
console.log('A. antes de pedir a leitura');
fs.readFile(__filename, 'utf8', (erro, conteudo) => {
  // Este callback roda DEPOIS, quando a libuv avisar que a leitura terminou.
  if (erro) throw erro;
  console.log(`C. li ${conteudo.length} caracteres (async) — callback executado`);
});
console.log('B. pedido feito, sigo executando sem esperar');
// Saída esperada: A, B e só depois C.
