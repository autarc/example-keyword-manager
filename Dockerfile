#
ARG ALPINE_VERSION=3.11

# https://github.com/nodejs/docker-node#nodealpine
FROM node:12.16.3-alpine${ALPINE_VERSION} AS nodejs

#
FROM alpine:${ALPINE_VERSION}

RUN apk update && apk upgrade

COPY --from=nodejs . .

# less verbose log level (default: info)
ENV NPM_CONFIG_LOGLEVEL warn

# create workspace
ENV APP_PATH /app
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

# load modules
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# bundle app source
COPY . .

EXPOSE 10000

CMD ["yarn", "start"]
