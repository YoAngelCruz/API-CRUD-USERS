# Usa una imagen base de Node.js
FROM node:16.x

# Establece el directorio de trabajo en el contenedor
WORKDIR /Api

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./Api

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . /Api

# Expón el puerto en el que la aplicación Node.js se ejecutará (opcional)
EXPOSE 8080

# Comando para iniciar tu aplicación Node.js Express
CMD ["node", "app.js"] 
