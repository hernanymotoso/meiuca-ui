# Meiuca Ui Challenge
-----------
[![Meiuca Ui - Hernany Motoso](https://github.com/hernanymotoso/meiuca-ui/actions/workflows/meiuca-ui.yml/badge.svg)](https://github.com/hernanymotoso/meiuca-ui/actions/workflows/meiuca-ui.yml)

Builded by: [hernanymotoso.com.br](https://www.hernanymotoso.com.br)


Objetivo desenvolver os componentes de Button, Heading, Shape, Paragraph e depois compor um Card Content com todos eles seguindo a folha de Design Tokens apresentada e criar uma página de notícias consumindo o component de card e os dados da api de notícias do google.

Levando em consideração o cenário de uma grande empresa eu pensei nos seguintes itens:

- Ter uma estrutura que pode escalar
    - criar um monorepo
- Possibilidade de não ficar dependente do react
    - criar o component library desacoplado dividido em pacotes
        - package reactcomponents (Contém os componentes react sem estilização)
        - package styles (Contém o CSS  estilos dos componentes)
        - package web (Contém todos os nossos tokens)
        - package colors (Contém todas as cores da marca/empresa)
            
      Dessa forma acima temos a liberdade de usar os estilos e cores em outras tecnologias
            
- E para trabalho em equipe com vários desenvolvedores eu pensei em usar algumas ferramentas
    - Eslint, Prettier, editorConfig (Garante um padrão de código entre a equipe)
    - Commitizen (Garante um padrão na escrita dos commits)
    - Testes com Jest  (Garante o funcionamento do projeto)
    - CI/CD (Garante que a branch master vai sempre estar funcionando)

[See online in production](https://meiuca.hernanymotoso.com.br/)
![meiuca](https://user-images.githubusercontent.com/28400751/163744015-ba215179-8f45-4860-a2f8-453cc15dbb94.png)

![mobile](https://user-images.githubusercontent.com/28400751/163744065-39fd450e-0e9e-46f9-a490-78974fba7ca6.png)![mobile2](https://user-images.githubusercontent.com/28400751/163744068-23f3f2bb-b86c-4c1e-a668-fbf4a36d1262.png)

tasks
![tasks](https://user-images.githubusercontent.com/28400751/163744177-8e83c38c-c8fe-4381-9956-6056c4b18c97.png)




[See online in production](https://meiuca.hernanymotoso.com.br/)


## Technologies used
----
Main technologies used in the code.

💻 [ReactJS](https://pt-br.reactjs.org/)

🧰 [Typescript](https://www.typescriptlang.org/)

🪄 [Stitches](https://stitches.dev/)

✅ [Jest](https://jestjs.io/)

📘 [Storybook](https://storybook.js.org/)

📦 [Json Server](https://github.com/typicode/json-server)

🛠 [Github Actions CI/CD](https://github.com/features/actions)

## How to run the project

This app is built on the [TurboRepo](https://turborepo.org/)

* In the terminal, in the project directory, run `yarn` to install the dependencies and then `yarn test`, `yarn build` then run `cd apps/webtest` and `yarn start`to run the project.

By default the front-end project will be available at http://localhost:3000

That's it! 
