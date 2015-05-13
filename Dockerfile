FROM node:latest

ADD ./app /src/app
ADD ./bower_components /src/bower_components
ADD ./node_modules /src/node_modules
ADD ./server.js /src/

ENV NODE_ENV=aws

EXPOSE 3001

CMD node /src/server.js
