// Prévia do módulo de TypeScript!
// Node 22.18+ (e 23.6+) executa arquivos .ts simples removendo os tipos ("type stripping").
// Rode com: node 05-ola.ts
// (Em Node 22.6–22.17 use: node --experimental-strip-types 05-ola.ts)

function saudar(nome: string, vezes: number = 1): string {
  return `Olá, ${nome}! `.repeat(vezes).trim();
}

console.log(saudar('TypeScript', 2));
// Atenção: o Node só REMOVE os tipos, ele não verifica erros de tipo.
// Quem verifica é o compilador `tsc` — veremos isso no Dia 11.
