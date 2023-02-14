FROM node:18

COPY package.json /app/package.json
COPY src/ /app/src
WORKDIR /app/
RUN npm install
CMD npm start
