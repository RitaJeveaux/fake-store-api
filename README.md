# Fake Store

Este é um projeto de front-end simples que simula uma interface de loja virtual.

Ele busca dados de produtos da [Fake Store API](https://fakestoreapi.com/), os exibe e permite operações CRUD (Criar, Ler, Atualizar, Deletar) na lista de produtos.

Os dados são persistidos no Local Storage do navegador para manter o estado entre as sessões.

## ✨ Funcionalidades

- **Busca de Produtos da API**: Na primeira vez que a página é carregada, os produtos são buscados da Fake Store API.
- **Cache em Local Storage**: Os produtos são salvos no Local Storage para evitar novas chamadas à API a cada recarregamento da página, tornando o carregamento subsequente instantâneo.
- **Visualização de Produtos**: Os produtos são exibidos em um layout de grade responsivo.
- **Operações CRUD**:
  - **Criar (Create)**: Adiciona um novo produto à lista através de um formulário. Um ID único é gerado com base no timestamp.
  - **Ler (Read)**: Clicar em um card de produto preenche o formulário com seus dados, facilitando a atualização ou exclusão.
  - **Atualizar (Update)**: Modifica os detalhes de um produto existente usando seu ID.
  - **Deletar (Delete)**: Remove um produto da lista usando seu ID.
- **Interface Intuitiva**: Um formulário lateral permite gerenciar os produtos de forma simples e direta.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização da aplicação, incluindo o uso de Grid Layout para a galeria de produtos.
- **JavaScript (ES6+)**: Manipulação do DOM, lógica da aplicação, chamadas `async/await` para a API e interação com o Local Storage.
- **Fake Store API**: Fornece os dados iniciais dos produtos.

## 🚀 Como Executar

1. Clone este repositório para sua máquina local:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto.
3. Abra o arquivo `index.html` em seu navegador de preferência (como Google Chrome, Firefox, etc.).

A aplicação estará pronta para uso!

## 📂 Estrutura dos Arquivos

```
fake-store-api/
├── index.html      # Estrutura principal da página web.
├── style.css       # Folha de estilos para a aparência visual.
└── script.js       # Contém toda a lógica de manipulação do DOM e interação com a API.
```

---

© 2025 Rita Jeveaux
