FROM node:18-buster-slim
WORKDIR /app
COPY dist/server /app/
COPY package.json /app/
COPY dist/client /app/public/statics
ENV NODE_ENV='production'

EXPOSE 80
CMD [ "node", "--max-http-header-size=80000", "/app/server.js" ]
