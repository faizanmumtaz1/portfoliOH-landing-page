FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get -y install wget nodejs npm

RUN npm install -g n
RUN n 16
RUN npm install -g npm@8
RUN echo "Node: $(node -v)  Npm: $(npm -v)"

# build app
WORKDIR /app

COPY src ./src
COPY public ./public
COPY package.json .
COPY package-lock.json .
COPY next-env.d.ts .
COPY next.config.js .
COPY tsconfig.json .
COPY .eslintrc.json .

ARG REACT_ENV
ENV REACT_ENV=${REACT_ENV}
RUN npm ci
RUN npm run build:deploy

#CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"
ENTRYPOINT ["npm", "run", "start:deploy"]
