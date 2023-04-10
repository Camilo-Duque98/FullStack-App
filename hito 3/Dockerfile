FROM node:19
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json",".env","./"]

COPY . .

RUN npm install


CMD npm run dev