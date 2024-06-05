Nota 10
Descrição
O Nota 10 é um sistema simples e intuitivo de gerenciamento de notas, desenvolvido utilizando HTML, CSS e JavaScript. Ele permite que os usuários adicionem, visualizem, editem e excluam notas diretamente no navegador, armazenando todos os dados no localStorage.

Funcionalidades
Adicionar Notas: Permite ao usuário adicionar novas notas com título e conteúdo.
Editar Notas: Possibilita a edição de notas existentes.
Excluir Notas: Permite a remoção de notas indesejadas.
Visualizar Notas: Exibe todas as notas salvas em uma interface amigável.
Armazenamento Local: Utiliza localStorage para armazenar os dados, garantindo que as notas persistam mesmo após o fechamento do navegador.
Tecnologias Utilizadas
HTML: Estrutura do sistema.
CSS: Estilização e layout responsivo.
JavaScript: Lógica do sistema e manipulação do DOM.
localStorage: Armazenamento dos dados no navegador.


Estrutura do Projeto

nota-10/
├── index.html
├── recusos
      └──  css/
            └── styles.css
      └── js/
            └── app.js
      └── img/
            └── site
            └── foto


index.html: Arquivo principal que contém a estrutura HTML.
css/styles.css: Arquivo de estilo que contém o CSS para a estilização do sistema.
js/app.js: Arquivo JavaScript que contém a lógica do sistema e as interações com o localStorage.

Implementação
HTML (index.html)
Contém a estrutura básica do aplicativo, incluindo os elementos de input para adicionar e editar notas, além da exibição das notas existentes.

CSS (css/styles.css)
Define o layout e a aparência do aplicativo, garantindo uma interface amigável e responsiva.

JavaScript (js/app.js)
Gerencia toda a lógica do sistema, incluindo:

Adição de novas notas.
Edição de notas existentes.
Exclusão de notas.
Salvamento e recuperação de notas do localStorage.

