# Sensu GO OSS WEB-UI

Tags follow the public project releases.

Specify BACKEND environment variable in the form "http(s)://sensu-go-api-endpoint:port"

### as release v1.2.1 this works ONLY with node 14 

Follow link on github:

https://github.com/sensu/web
https://github.com/sensu/sensu-go


### HOW to build

```bash

podman build --build-arg TAG=v1.2.1 -f Dockerfile -t sensu-ui:dev .

```

### HOW to run

env variables:

- BACKEND: url to sensu api
- RESOLVER: ip of dns server. nginx uses this dns to solve backend name.

```bash
podman run -it --rm -p 7070:80 -e BACKEND="http(s)://sensu-api.domain.com" -e RESOLVER="<dns_IP>" localhost/sensu-ui:dev

```

open browser at `http://127.0.0.1:7070`