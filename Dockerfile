FROM node:18.7.0

ARG GITHUB_ACCESS_TOKEN

ARG RAILWAY_SERVICE_ID

WORKDIR /app/

COPY . /app/.

RUN echo "//npm.pkg.github.com/:_authToken=$GITHUB_ACCESS_TOKEN" >> /app/.npmrc

RUN cat /app/.npmrc

ENV NPM_CONFIG_USERCONFIG=/app/.npmrc

RUN --mount=type=cache,id=s/$RAILWAY_SERVICE_ID-/root/npm,target=/root/.npm npm ci

RUN npm run build

# Expose the port your app runs on
EXPOSE 8080

# Command to run the Spring boot application
CMD ["npm", "start"]