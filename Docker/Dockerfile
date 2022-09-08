FROM node:14-buster as build
ARG TAG

WORKDIR /opt/sensu
RUN git clone https://github.com/sensu/web.git

WORKDIR /opt/sensu/web

RUN git checkout tags/${TAG} &&  \
    yarn install

#DO NOT MOVE ENV BEFORE yarn install COMMAND
ENV NODE_ENV=production
RUN yarn build

FROM openresty/openresty:1.21.4.1-buster

ENV NODE_ENV=production

COPY --from=build /opt/sensu/web/build/app/ /var/www/html
COPY entrypoint.sh /entrypoint.sh
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY sensu.conf /etc/nginx/conf.d/default.conf

RUN chown www-data. /entrypoint.sh && chmod +x /entrypoint.sh

WORKDIR /var/www/html
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]