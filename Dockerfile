FROM node:20.15.1-alpine3.20

WORKDIR /eso-status

COPY ./dist/ ./dist/
COPY ./node_modules/ ./node_modules/
COPY ./.env.example .
COPY ./package.json .
COPY ./start.sh /tmp/start.sh

# Execute start script
ENTRYPOINT ["/bin/sh", "/tmp/start.sh"]