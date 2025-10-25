FROM node:18-alpine

WORKDIR /app

# Copiar manifiestos primero para aprovechar cache de Docker
COPY package*.json ./

# Instalar dependencias de producción de manera reproducible
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Crear usuario no-root y usarlo
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["npm", "start"]
