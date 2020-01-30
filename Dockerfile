FROM node:10-alpine3.11

WORKDIR /app
COPY ./ /app

RUN yarn install

CMD yarn start
