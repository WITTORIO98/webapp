FROM node:latest AS build

WORKDIR /tmp/app

RUN git clone https://WITTORIO98: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@github.com/WITTORIO98/webapp.git . && \
    npm i && \
    npx ng build

FROM nginx:latest

COPY --from=build /tmp/app/dist/webapp /usr/share/nginx/html
