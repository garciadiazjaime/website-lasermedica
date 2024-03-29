FROM python:2.7
FROM node:14.8.0-slim

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app

ADD . /usr/src/app

EXPOSE 3030

CMD [ "node", "./lib/server/server.js" ]
