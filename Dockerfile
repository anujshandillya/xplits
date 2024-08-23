ARG NODE_VERSION=21.7.3
FROM node:${NODE_VERSION}-alpine

WORKDIR /xplits

COPY package*.json ./

RUN yarn install

COPY . .
EXPOSE 3000

CMD npm run dev
