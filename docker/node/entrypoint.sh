#!/bin/bash

cd /var/www

if [ ! -d /var/www/node_modules ]; then
  npm install --legacy-peer-deps
  npm run start
else
  npm run start
fi
