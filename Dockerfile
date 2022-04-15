FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD yarn typeorm migration:run && yarn dev:server -p 0.0.0.0:$PORT
