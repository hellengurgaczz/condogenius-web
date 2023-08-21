FROM node:18-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm ci
# Instala as bibliotecas devDependences e --silent pra nao ficar aparecendo no console as mensagens de instgalacao
COPY . ./
RUN npm run build

# SERVER
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "deamon off;"]