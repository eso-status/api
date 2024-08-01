#!/bin/sh

## GENERATE SSL CERT
private_lines=$(echo $SSL_PRIVATE | tr " " "\n")
echo "-----BEGIN RSA PRIVATE KEY-----" >> ./private.key
for private_line in $private_lines
do
  if [ "$private_line" != "-----BEGIN" ] && [ "$private_line" != "RSA" ] && [ "$private_line" != "PRIVATE" ] && [ "$private_line" != "KEY-----" ] && [ "$private_line" != "-----END" ]
  then
    echo $private_line >> ./private.key
  fi
done
echo "-----END RSA PRIVATE KEY-----" >> ./private.key
certificate_lines=$(echo $SSL_CERTIFICATE | tr " " "\n")
echo "-----BEGIN CERTIFICATE-----" >> ./certificate.crt
for certificate_line in $certificate_lines
do
  if [ "$certificate_line" != "-----BEGIN" ] && [ "$certificate_line" != "CERTIFICATE-----" ] && [ "$certificate_line" != "-----END" ]
  then
    echo $certificate_line >> ./certificate.crt
  fi
done
echo "-----END CERTIFICATE-----" >> ./certificate.crt
ca_bundle_lines=$(echo $SSL_CA_BUNDLE | tr " " "\n")
echo "-----BEGIN CERTIFICATE-----" >> ./ca_bundle.crt
for ca_bundle_line in $ca_bundle_lines
do
  if [ "$ca_bundle_line" != "-----BEGIN" ] && [ "$ca_bundle_line" != "CERTIFICATE-----" ] && [ "$ca_bundle_line" != "-----END" ]
  then
    echo $ca_bundle_line >> ./ca_bundle.crt
  fi
done
echo "-----END CERTIFICATE-----" >> ./ca_bundle.crt

# SETUP ENV FILE
cat ./.env.example > ./.env
sed -i -e "s/__NODE_ENV__/$NODE_ENV/g" ./.env
sed -i -e "s/__APP_NAME__/$APP_NAME/g" ./.env
sed -i -e "s/__APP_PREFIX__/$APP_PREFIX/g" ./.env
sed -i -e "s/__APP_PROTOCOL__/$APP_PROTOCOL/g" ./.env
sed -i -e "s/__APP_HOST__/$APP_HOST/g" ./.env
sed -i -e "s/__APP_PORT__/$APP_PORT/g" ./.env
sed -i -e "s/__SSL_PRIVATE__/$SSL_PRIVATE/g" ./.env
sed -i -e "s/__SSL_CERTIFICATE__/$SSL_CERTIFICATE/g" ./.env
sed -i -e "s/__SSL_CA_BUNDLE__/$SSL_CA_BUNDLE/g" ./.env
sed -i -e "s/__DB_TYPE__/$DB_TYPE/g" ./.env
sed -i -e "s/__DB_HOST__/$DB_HOST/g" ./.env
sed -i -e "s/__DB_PORT__/$DB_PORT/g" ./.env
sed -i -e "s/__DB_NAME__/$DB_NAME/g" ./.env
sed -i -e "s/__DB_USER__/$DB_USER/g" ./.env
sed -i -e "s/__DB_PASSWORD__/$DB_PASSWORD/g" ./.env
sed -i -e "s/__DB_DEBUG__/$DB_DEBUG/g" ./.env
sed -i -e "s/__FORUM_MESSAGE_UPDATE_INTERVAL__/$FORUM_MESSAGE_UPDATE_INTERVAL/g" ./.env
sed -i -e "s/__LIVE_SERVICES_UPDATE_INTERVAL__/$LIVE_SERVICES_UPDATE_INTERVAL/g" ./.env
sed -i -e "s/__SERVICE_ALERTS_UPDATE_INTERVAL__/$SERVICE_ALERTS_UPDATE_INTERVAL/g" ./.env
sed -i -e "s/__AWS_ACCESS_KEY_ID__/$AWS_ACCESS_KEY_ID/g" ./.env
sed -i -e "s/__AWS_SECRET_ACCESS_KEY__/$AWS_SECRET_ACCESS_KEY/g" ./.env
sed -i -e "s/__AWS_REGION__/$AWS_REGION/g" ./.env
sed -i -e "s/__CLOUDWATCH_GROUP_NAME__/$CLOUDWATCH_GROUP_NAME/g" ./.env
sed -i -e "s/__CLOUDWATCH_STREAM_NAME__/$CLOUDWATCH_STREAM_NAME/g" ./.env

## RUN DATABASE MIGRATION
npm run migration:run

## START APPLICATION
npm run start:prod
