FROM node:18.7.0

WORKDIR /app/

COPY . /app/.

RUN echo '//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}' > /app/.npmrc

ENV NPM_CONFIG_USERCONFIG=/app/.npmrc

RUN --mount=type=cache,id=s/b1c87399-238a-4815-a28b-5eb4a3b20916-/root/npm,target=/root/.npm npm ci

RUN npm run build

# Expose the port your app runs on
EXPOSE 8080

# Command to run the Spring boot application
CMD ["npm", "start"]