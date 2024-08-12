FROM node:20-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm ci && npm i sharp

COPY prisma ./prisma
COPY . .

RUN npx prisma generate
RUN npm run build || true

EXPOSE 3000

CMD ["npm", "run", "start"]
