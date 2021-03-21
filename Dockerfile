FROM node:12

COPY . /risk-management

WORKDIR /risk-management

EXPOSE 3000

CMD [ "node", "server.js" ]