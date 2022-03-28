FROM nginx:alpine

WORKDIR /var/www/html

COPY /docker/ngnix/sites/default.conf /etc/nginx/conf.d/default.conf
COPY ./build ./app
