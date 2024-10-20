# AngoBarber
 Barbearia

 # Criacao da aplicacao
 [1] criiamos a nossa aplicacao usando npx create-next-app@latest
 [2] depois instalamos o prisma  [npm install prisma --save-dev] depois rodamos o comando [npx prisma init --datasource-provider postgresql]
 [3] depois criamos o nosso ban co de dados no ficheiro prisma, apos a criacao rodamos o comando [npx prisma format]
 [4] criamos o arquivo que contem os dados do nosso banco ou o ficheiro [seed.ts] e rodamos o seguinte comando para adicionar os dados no banco [npx prisma migrate dev --name init]

 # npx prisma format => comando usado para formatar o nosso banco de dados

 # npx prisma migrate dev --name init_db =>  comando para migrar o nosso banco de dados em modo de desenvolvimento,


//Comando para comitar no github pela linha de comando
* 1 git add .
* 2 git commit -m "chore: o nome do seu commit"

# Colocando dados no bancos mais primeiro instalamos o ts- node
* npm install -D ts-node

# Apos a instalacao do ts-node rodamos o seguinte comando
* npx prisma db seed => este comando vai colocar os dados que estao no nosso arquivo seed.ts no nosso banco de dados