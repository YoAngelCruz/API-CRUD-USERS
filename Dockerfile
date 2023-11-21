FROM node:16.19.0

WORKDIR /Api-Crud

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /Api-Crud

EXPOSE 3000

CMD ["node", "app.js"] 
