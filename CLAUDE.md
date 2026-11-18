# Instruções para gerar os dias da trilha

Este repositório é uma trilha de estudos de Node.js + TypeScript, em português (pt-BR).
Quando o usuário pedir "gerar dia NN" / "próximo dia":

1. Pegue o próximo tópico pendente (⬜) no roteiro do `README.md` (ou o tópico que o usuário indicar).
2. Crie a pasta `dias/NN-slug-do-topico/` contendo:
   - `README.md` seguindo `templates/dia.md` (explicação, mapa mental, código, exercícios, quiz com respostas em `<details>`, resumo em 5 linhas).
   - `mapa-mental.svg` desenhado à mão em SVG, no mesmo estilo do Dia 01:
     canvas 1400x1000, título no topo, nó central, 6 cartões coloridos (3 à esquerda, 3 à direita)
     ligados ao centro por curvas, um mini diagrama no meio e uma "frase-chave" no rodapé.
     Máx. ~45 caracteres por linha nos cartões; escapar `&`, `<`, `>`.
   - Um bloco Mermaid `mindmap` no README como versão em texto do mapa.
   - `exemplos/` com código executável e comentado (`.js` nos módulos 1–2, `.ts` a partir do módulo 3).
3. Inclua uma seção "Revisão do dia anterior" com 3 perguntas rápidas sobre o dia anterior.
4. Atualize o roteiro no `README.md`: link para a pasta e status ✅.
5. Verifique se o SVG é XML válido (ex.: `python3 -c "import xml.dom.minidom,sys;xml.dom.minidom.parse(sys.argv[1])" arquivo.svg`) e rode os exemplos.
