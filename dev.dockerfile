# Stage 1
FROM node:10.0-alpine as builder

WORKDIR /app

COPY package.json /app/
COPY src /app/src/
COPY rollup.config.js /app/
COPY filepaths.js /app/
COPY .babelrc /app/

RUN yarn

CMD [ "yarn", "start" ]