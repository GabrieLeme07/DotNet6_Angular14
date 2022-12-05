### STAGE 1: Build ###
FROM node:18.12-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/product-web-app /usr/share/nginx/html
### Copy the EntryPoint ###
COPY ./entryPoint.sh /
RUN chmod +x entryPoint.sh
ENTRYPOINT ["sh","/entryPoint.sh"]
CMD ["nginx", "-g", "daemon off;"]