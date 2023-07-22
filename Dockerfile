#node 

FROM node:alpine as nodework

WORKDIR /hospitalapp

COPY package.json .

RUN npm install

COPY . .

RUN npm run build



#ngnix block

FROM nginx:1.24.0-alpine-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=nodework /hospitalapp/build  .

ENTRYPOINT [ "nginx","-g", "daemon off;" ]
