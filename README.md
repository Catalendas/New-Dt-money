# New-Dt-money
O projeto Dt-money foi criado afins de estudo de sobre performance dentro do React e o consumo e envio de dados com a Api do Json server

## template do projeto 
![image](https://user-images.githubusercontent.com/82763928/213931631-a4c20642-f645-470e-8203-7329d7b2da77.png)

## Tecnologias e sobre o projeto
O projeto faz a simulação de um aplicativo de gestão de finanças pessoais, o valor total de entradas e saidas do valor gasto ou ganho. 
O envio e consumo de dados está sendo feito pelo Axios e o j-son server está armazenando os dados do projeto.
O projeto também conta com validação de dados no modal com o react-hook-form e o zod.
O projeto também está contando com uma responsividade sugerida no figma

Foram utilizadas as seguintes bibliotecas e tecnologias:
- typescript
- HTML 
- Css com styled-components
- react-hook-form(validação)
- zod(validação)
- use-context-selector(Performace)
- Phosphor-react
- axios
- radix-ui

## Como instalar o projeto e rodar ele em sua maquina?

Para rodar o projeto em sua maquina primeiro é necessario a instalação do git para fazer a cópia do repositori, 
após a instalação do git é preciso abrir o terminal do git e dar o comando ```git clone link do repositório```.

Após fazer a clonagem do repositório é preciso ter um editor de código de qualidade, recomendo o Visual Studio Code.
No seu computador também é preciso ter o gerenciador de pacotes do ```Node``` ou o ```Yarn```, se por preferencia
você decidir instalar o ```Yarn```, dentro da pasta onde estão os arquivos do projeto abra o pronpt de comando e execute
o comando do mesmo como descrito ```Yarn```, se decidir estalar o ```Node``` faça o mesmo processo e execute ```npm init```,
todo esse processo é feito para instalar as dependencias do projeto.

Após isso execute o comando do servidor ```Yarn dev``` ou ```npm start```, assim o servidor será iniciado, após isso aparecerá
o link do localhost da pagina, copie e coloe na barra de pesquisa, após isso de o enter e verá a interface grafica do projeto.
Para inicializar o J-son server utilize o comando ```Yarn dev:server``` ou ```npm start dev:server```.
