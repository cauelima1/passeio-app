FROM node:22-alpine3.22

WORKDIR /appdi

RUN npm install -g json-server

COPY ./db.production.json .

EXPOSE 4000

ENTRYPOINT ["json-server", "--watch", "db.production.json", "--host", "0.0.0.0", "--port", "4000"]
