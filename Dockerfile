# Stage
FROM node:10.0-alpine

WORKDIR /app

COPY package.json /app/
COPY src /app/src/
COPY rollup.config.js /app/
COPY filepaths.js /app/
COPY .babelrc /app/

ENV NODE_ENV=production

RUN yarn install && \
    yarn build

EXPOSE 3000

CMD [ "node", "/app/build/server.js" ]