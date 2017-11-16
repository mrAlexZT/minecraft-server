#!/bin/bash

sed -i '/cd \/data/a [ -f /data/web/index.html ] && { sed -i "s/VANILLA_VERSION/$VANILLA_VERSION/g" /data/web/index.html; pushd /data/web; screen -md python -m SimpleHTTPServer 8080 ; popd; }' /start-server.sh


