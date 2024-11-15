# Utiliser une image officielle Node.js comme base pour le build
FROM node:20 AS build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Construire l'application Vue.js pour la production
RUN npm run build

# Utiliser une image Nginx pour servir les fichiers construits
FROM nginx:alpine AS production-stage

# Copier les fichiers construits depuis le build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
