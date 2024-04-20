FROM node:21-alpine3.18

ARG MONGO_URL

ENV MONGO_URL=$MONGO_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
