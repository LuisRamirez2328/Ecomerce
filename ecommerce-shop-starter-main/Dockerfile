# Usa una imagen base oficial de Node.js
FROM node:14

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación React
RUN npm run build

# Expone el puerto en el que la app va a correr
EXPOSE 3000

# Define el comando de inicio de la aplicación
CMD ["node", "server.mjs"]
