FROM node:19
WORKDIR /app
RUN npm install serve

COPY . .
RUN npm ci
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "build"]
