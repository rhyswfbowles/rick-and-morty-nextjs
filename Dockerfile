FROM node:14-alpine3.11 AS build

ENV HOME=/app/

RUN mkdir $HOME
WORKDIR $HOME

USER root

RUN apk add openssl;

COPY package*.json $HOME

# Seperate commands to utilise docker caching
RUN npm ci

COPY . $HOME

RUN npm run build

RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Company, Inc./CN=localhost" -addext "subjectAltName=DNS:localhost" -newkey rsa:2048 -keyout $HOME/certificates/selfsigned.key -out $HOME/certificates/selfsigned.crt;

## Second stage build
FROM node:14-alpine3.11

ENV HOME=/app/

RUN mkdir $HOME
WORKDIR $HOME

RUN chown -R node:node $HOME
USER node

COPY --from=build $HOME $HOME

CMD ["npm", "start"]
