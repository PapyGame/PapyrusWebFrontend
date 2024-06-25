mkdir -p ~/.m2 \
echo '<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <servers>
    <server>
      <id>github-sirius-emfjson</id>
      <username>'"$GITHUB_USERNAME"'</username>
      <password>'"$GITHUB_ACCESS_TOKEN"'</password>
    </server>
    <server>
      <id>github-emfjson</id>
      <username>'"$GITHUB_USERNAME"'</username>
      <password>'"$GITHUB_ACCESS_TOKEN"'</password>
    </server>
    <server>
      <id>github-papyrus-sirius-uml2</id>
      <username>'"$GITHUB_USERNAME"'</username>
      <password>'"$GITHUB_ACCESS_TOKEN"'</password>
    </server>
    <server>
      <id>papyrus-uml-services</id>
      <username>'"$GITHUB_USERNAME"'</username>
      <password>'"$GITHUB_ACCESS_TOKEN"'</password>
    </server>
    <server>
      <id>github-sirius-components</id>
      <username>'"$GITHUB_USERNAME"'</username>
      <password>'"$GITHUB_ACCESS_TOKEN"'</password>
    </server>
  </servers>
</settings>' > ~/.m2/settings.xml
echo '//npm.pkg.github.com/:_authToken='"$GITHUB_ACCESS_TOKEN" > ~/.npmrc 
npm install
npm run build