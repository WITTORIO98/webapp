FROM node:latest AS build
WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@10.0.4 && \
    npm install && \
    ng build
COPY . .

FROM nginx:latest
WORKDIR /app
COPY --from=build /app/dist/my-app /usr/share/nginx/html
