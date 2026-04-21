FROM node:20-bullseye
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --production=false --silent || true
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

