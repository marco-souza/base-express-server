# Stage 1
FROM node:10.0-alpine as builder

WORKDIR /app

COPY package.json /app/
COPY src /app/src/
COPY rollup.config.js /app/
COPY filepaths.json /app/

ENV NODE_ENV=production

RUN yarn install && \
    yarn build


# Stage 2
FROM gcr.io/distroless/cc

EXPOSE 3000

COPY --from=builder /app/build/server /

ENTRYPOINT [ "/server" ]