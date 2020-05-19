FROM node:12.16.3-alpine3.11
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g nodemon --quiet
EXPOSE 3000
CMD ["npm", "start"]