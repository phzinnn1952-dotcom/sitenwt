# Site Netway

Landing page estática (HTML, CSS e JS puros) para a Netway: internet fibra óptica.

## Estrutura

- `index.html`: página com topo, planos, empresas, diferenciais, cobertura, FAQ, contato e rodapé
- `css/style.css`: estilos. As cores da marca ficam nas variáveis `:root`.
- `js/main.js`: menu mobile, máscara de CEP e envio dos formulários para o WhatsApp

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## O que falta preencher

- Número do WhatsApp (`WHATSAPP` em `js/main.js`) e telefone (`tel:` no `index.html`)
- Velocidades e preços reais dos planos
- Links da Central do Assinante, 2ª via e política de privacidade (marcados com `data-todo`)
- Logo oficial e cores da marca (variáveis `--brand` e `--accent`)
