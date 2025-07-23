#!/usr/bin/env bash

# post to TKXel deploy channel
TKXEL_WEBHOOK="https://hooks.slack.com/services/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"
DEPLOY_MSG="Started $DEPLOY_TARGET_UPR-deploy of $DEPLOY_DESCRIPTION, see $LOGURL"
curl -X POST -H 'Content-type: application/json' --data "{\"text\": \"$DEPLOY_MSG\"}" $TKXEL_WEBHOOK

#exit on error
set -e

# create env
cat src/config/env.defaults > $TARGET/run.env
cat src/config/env.$DEPLOY_TARGET >> $TARGET/run.env
#mv deploy/babelrc .babelrc

IMAGE=$DEPLOY_CONTAINER
SERVERPORT=3000

export DEPLOY_BACKEND1_URL="http://$DEPLOY_CONTAINER:$SERVERPORT"

# build image
$RUN_ON_HOST docker build -t $IMAGE --build-arg REACT_ENV=$DEPLOY_TARGET -f $VOL_REPO/deploy/Dockerfile $VOL_REPO

# start nextjs instance
echo "*** Stopping $DEPLOY_CONTAINER..."
$RUN_ON_HOST "docker ps -qa --filter name=$DEPLOY_CONTAINER | xargs -r docker stop | xargs -r docker rm"
echo "*** Starting $DEPLOY_CONTAINER..."
$RUN_ON_HOST docker run -d --name $DEPLOY_CONTAINER \
   --network $DEPLOY_NETWORK \
   --net-alias $DEPLOY_CONTAINER \
   --restart always \
   --env-file $VOL_TARGET/run.env \
   -v "$LOGS_VOL_ROOT/$DEPLOY_CONTAINER:/app/logs" \
   -e "NEXT_TELEMETRY_DISABLED=1" \
   $IMAGE:latest

# setup nginx
setup_nginx $REPO/deploy/nginx

# install SSL certificate
setup_ssl $DEPLOY_BASE_DOMAIN
setup_ssl www.$DEPLOY_BASE_DOMAIN
setup_ssl $DEPLOY_ALTBASE_DOMAIN
setup_ssl www.$DEPLOY_ALTBASE_DOMAIN

# log url
echo Deployed on https://$DEPLOY_BASE_SUBDOMAIN.$DEPLOY_BASE_DOMAIN
