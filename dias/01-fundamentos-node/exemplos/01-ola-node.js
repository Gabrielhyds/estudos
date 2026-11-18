// Rode com: node 01-ola-node.js SeuNome
// Mostra informações do ambiente Node e alguns globais importantes.

console.log('Olá, Node!');
console.log('Versão do Node:', process.version);
console.log('Versão do V8:', process.versions.v8);
console.log('Versão da libuv:', process.versions.uv);
console.log('Sistema/arquitetura:', process.platform, process.arch);
console.log('Diretório atual (cwd):', process.cwd());
console.log('Este arquivo está em (__dirname):', __dirname);

// process.argv = [caminho do node, caminho do script, ...seus argumentos]
const nome = process.argv[2] ?? 'visitante';
console.log(`Bem-vindo(a), ${nome}!`);

// No Node não existe window/document. O objeto global é globalThis.
console.log('typeof window:', typeof window);
console.log('globalThis === global:', globalThis === global);
