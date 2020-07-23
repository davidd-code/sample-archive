FROM node:10

WORKDIR /server

RUN npm install -g nodemon

COPY server/package.json /server/package.json
RUN npm install && npm ls
RUN mv /server/node_modules /node_modules

COPY . /server

CMD ["npm", "start"]