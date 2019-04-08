# Stage 1
FROM node:10.0-alpine as builder

WORKDIR /app

COPY package.json /app/
COPY src /app/src/
COPY rollup.config.js /app/
COPY filepaths.js /app/
COPY .babelrc /app/

RUN yarn && \
    yarn build


# Stage 2
FROM node:10.0-alpine

WORKDIR /app
EXPOSE 3000

ENV NODE_ENV=production

COPY --from=builder /app/build/server.js /app/
COPY package.json /app/

RUN yarn --prod

CMD [ "node", "/app/server.js" ]