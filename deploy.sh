#!/bin/bash

# Esci immediatamente se un comando fallisce
set -e

# Installa le dipendenze del progetto
npm install

# Esegui il build del progetto
npm run build

# Crea la directory di destinazione se non esiste
mkdir -p /var/www/PapyGame/

# Copia i file dal progetto papyrus-web al server web
cp -r ./papyrus-web/dist/* /var/www/PapyGame/

# Copia i file dal progetto sirius-web-application al server web
cp -r ./sirius-web-application/dist/* /var/www/PapyGame/

# Riavvia Nginx per applicare le modifiche
systemctl restart nginx