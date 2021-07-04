FROM node
WORKDIR /app
COPY package-lock.json ./
COPY package.json ./
COPY . .
RUN npm install
RUN npm install express
RUN npm install express-handlebars
EXPOSE 3000
CMD ["node", "index.js"]