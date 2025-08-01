# 📚 Livraria Virtual
Pequena simulação de um e-commerce de livros visando praticar conceitos relacionados a componentização, navegação, formulários e autenticação, e exibição de dados via API. Nessa aplicação, usuários podem fazer login para acessar a página principal, onde os livros são separados por categoria. A partir daí, os usuários podem navegar por categoria e ou selecionar um livro específico. Esse projeto faz parte da capacitação da IN Junior 2025-1. <br>
<sub>Elementos visuais sem funcionalidade não são um erro, eles apenas não fazem parte dos requisitos da atividade, mas foram mantidos pela coerência visual.</sub>

## Tecnologias Utilizadas
* React
* TypeScript 
* HTML5
* CSS3
* Vite
* Axios
* Zod
* JSON Server
* React Router

## Como Rodar o Projeto
Clone o repositório 
```
git clone https://github.com/jade-mendes/livraria-virtual.git
cd livraria-virtual
```
Instale as dependências necessárias
```
npm install -D vite
npm install axios
npm install json-server
```
Caso não tenha o npm instalado, digite
```
curl -qL https://www.npmjs.com/install.sh | sh
```
Em outro terminal, inicie o json-server
```
json-server --watch db.json --port 3001
```

No primeiro terminal, digite
```
npm run dev
```
e clique no link que aparecerá no terminal. Para terminar a execução, digite ctrl+c nos dois terminais.

## Funcionalidades
* ✅ Tela de login com autenticação usando Zod
* ✅ Consumo de dados com Axios e json-server para exibir os livros
* ✅ Navegação entre páginas com React Router

## Melhorias Futuras
* Criação da página do Carrinho
* Funcionalidade do botão "Adicionar ao carrinho"
