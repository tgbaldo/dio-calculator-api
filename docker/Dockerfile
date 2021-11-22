FROM node:16-alpine

WORKDIR /src

COPY package.json /src/
COPY yarn.lock /src/

RUN yarn install

ADD . /src

FROM node:16-alpine

COPY --from=0 /src /var/www

WORKDIR /var/www

CMD node /var/www/src/index.js