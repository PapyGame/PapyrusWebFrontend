FROM nixos/nix:latest AS nix-build

WORKDIR /app

COPY .nixpacks/nixpkgs-bf446f08bff6814b569265bef8374cfdd3d8f0e0.nix .nixpacks/nixpkgs-bf446f08bff6814b569265bef8374cfdd3d8f0e0.nix

RUN nix-env -if .nixpacks/nixpkgs-bf446f08bff6814b569265bef8374cfdd3d8f0e0.nix && nix-collect-garbage -d

COPY . /app/.

RUN echo '//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}' > /app/.npmrc

ENV NPM_CONFIG_USERCONFIG=/app/.npmrc

RUN --mount=type=cache,id=npm-cache-${CI_COMMIT_REF_SLUG:-local},target=/root/.npm npm ci

RUN npm run build

# Expose the port your app runs on
EXPOSE 8080

# Command to run the Spring boot application
CMD ["npm", "start"]