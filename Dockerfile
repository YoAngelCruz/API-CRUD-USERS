# Usa una imagen base de Node.js
FROM node:16.19.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /Api-Crud

# Copia el archivo package.json y package-lock.json (si existe)
COPY package.json .
COPY package-lock.json .

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . /Api-Crud

# Expón el puerto en el que la aplicación Node.js se ejecutará (opcional)
EXPOSE 3000

# Comando para iniciar tu aplicación Node.js Express
CMD ["node", "app.js"] 
