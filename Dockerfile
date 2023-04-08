# base image
FROM node:9.6.1

# set working directory
RUN mkdir /app
WORKDIR /app

# install and cache app dependencies
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

COPY . /app

RUN npm install --force
# start app
RUN npm run dev