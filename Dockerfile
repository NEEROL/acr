FROM node:16-alpine3.15
RUN apk update && apk add git
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build
CMD ["yarn", "start"]
