FROM node:20.15.1-alpine3.20

WORKDIR /eso-status

COPY ./ .

# Copy start script
COPY start.sh /tmp/

# Execute start script
ENTRYPOINT ["/bin/sh", "/tmp/start.sh"]