FROM node:14

ARG PRESENTATION_PATH

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8000

CMD node server.js ${PRESENTATION_PATH}