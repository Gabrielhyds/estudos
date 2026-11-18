# 🟢 Trilha Node.js - TypeScript

Um tópico por dia. Cada dia tem **explicação**, **mapa mental desenhado**, **código**, **exercícios** e **quiz** para fixar o conteúdo.

## Como funciona

1. Abra a pasta do dia em [`dias/`](./dias).
2. Olhe primeiro o **mapa mental** (`mapa-mental.svg`) para ter a visão geral.
3. Leia a explicação no `README.md` do dia.
4. Rode os exemplos em `exemplos/`.
5. Faça os exercícios e responda o quiz **sem olhar** — depois confira.
6. No dia seguinte, antes do tópico novo, revise o mapa do dia anterior (2 min). Isso é repetição espaçada.

Para gerar o próximo dia, basta pedir: **"gerar dia 02"** (ou "próximo dia").

## Roteiro

Legenda: ✅ feito · ⬜ pendente

### Módulo 1 — Fundamentos do Node.js
| Dia | Tópico | Status |
|---|---|---|
| 01 | [O que é Node.js: V8, libuv e a arquitetura](./dias/01-fundamentos-node) | ✅ |
| 02 | Event loop em detalhe: fases, microtasks e macrotasks | ⬜ |
| 03 | Módulos: CommonJS vs ES Modules | ⬜ |
| 04 | npm, `package.json`, scripts e versionamento semântico | ⬜ |
| 05 | Globais: `process`, variáveis de ambiente e argumentos | ⬜ |
| 06 | Sistema de arquivos: `fs`, `path` e `fs/promises` | ⬜ |

### Módulo 2 — JavaScript assíncrono no Node
| Dia | Tópico | Status |
|---|---|---|
| 07 | Callbacks, Promises e async/await | ⬜ |
| 08 | Tratamento de erros assíncronos | ⬜ |
| 09 | EventEmitter e programação orientada a eventos | ⬜ |
| 10 | Buffers e Streams | ⬜ |

### Módulo 3 — Fundamentos de TypeScript
| Dia | Tópico | Status |
|---|---|---|
| 11 | Por que TypeScript? `tsc`, `tsconfig.json` e rodar `.ts` no Node | ⬜ |
| 12 | Tipos primitivos, inferência, `any` vs `unknown` vs `never` | ⬜ |
| 13 | Objetos: `interface` vs `type` | ⬜ |
| 14 | Union, intersection e narrowing | ⬜ |
| 15 | Funções: parâmetros, retorno, overloads | ⬜ |
| 16 | Classes, modificadores de acesso e herança | ⬜ |
| 17 | Generics | ⬜ |
| 18 | Utility types (`Partial`, `Pick`, `Omit`, `Record`…) | ⬜ |

### Módulo 4 — TypeScript avançado
| Dia | Tópico | Status |
|---|---|---|
| 19 | Mapped types e `keyof` / `typeof` | ⬜ |
| 20 | Conditional types e `infer` | ⬜ |
| 21 | Template literal types | ⬜ |
| 22 | Type guards e discriminated unions | ⬜ |
| 23 | Arquivos de declaração (`.d.ts`) e tipagem de libs | ⬜ |

### Módulo 5 — Node + TypeScript na prática
| Dia | Tópico | Status |
|---|---|---|
| 24 | Setup profissional: TS + ESM + ESLint + Prettier | ⬜ |
| 25 | Servidor HTTP nativo com `node:http` | ⬜ |
| 26 | APIs REST com Fastify (ou Express) | ⬜ |
| 27 | Validação de dados com Zod | ⬜ |
| 28 | Configuração e variáveis de ambiente tipadas | ⬜ |

### Módulo 6 — Dados
| Dia | Tópico | Status |
|---|---|---|
| 29 | SQL e PostgreSQL com Node | ⬜ |
| 30 | ORMs: Prisma / Drizzle | ⬜ |
| 31 | Migrations e seeds | ⬜ |
| 32 | Cache com Redis | ⬜ |

### Módulo 7 — Qualidade
| Dia | Tópico | Status |
|---|---|---|
| 33 | Testes unitários com `node:test` / Vitest | ⬜ |
| 34 | Mocks, stubs e spies | ⬜ |
| 35 | Testes de integração e e2e de APIs | ⬜ |
| 36 | Logging e observabilidade | ⬜ |

### Módulo 8 — Arquitetura e produção
| Dia | Tópico | Status |
|---|---|---|
| 37 | Arquitetura em camadas e injeção de dependência | ⬜ |
| 38 | Autenticação: sessões, JWT e hashing de senhas | ⬜ |
| 39 | Segurança em APIs Node | ⬜ |
| 40 | Performance: `worker_threads` e `cluster` | ⬜ |
| 41 | Docker para aplicações Node | ⬜ |
| 42 | CI/CD e deploy | ⬜ |

> O roteiro é flexível: dá para trocar a ordem, quebrar um tópico em dois ou adicionar temas.
