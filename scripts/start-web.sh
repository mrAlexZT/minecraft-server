#!/bin/bash

sed -i '/cd \/data/a [ -f /data/web/index.html ] && sed "s/VANILLA_VERSION/$VANILLA_VERSION/g" /data/web/index.html' /start-minecraft

cd /data/web/
python -m SimpleHTTPServer 80 &

