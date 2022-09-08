#!/bin/bash
echo "starting..."
echo "update nginx resolver"
if [ -z "$RESOLVER" ]; then
  echo "cannot continue. env RESOLVER not set."
  exit 1
fi
sed -i "s/__RESOLVER__/$RESOLVER/g" /usr/local/openresty/nginx/conf/nginx.conf
echo "check config"
nginx -t

exec "$@"
