# Use a base image with Maven and OpenJDK pre-installed
FROM maven:3.8.4-openjdk-17-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project to the working directory
COPY . .

# Build the application with Maven
RUN mvn -s ./.m2/settings.xml clean install

# Second stage - create a minimal Docker image with the built artifact
FROM openjdk:17-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built artifact from the build stage
COPY --from=build /app/target/*.jar ./app.jar

# Expose the port your app runs on
EXPOSE 8080

# Command to run the Spring boot application
CMD ["java", "-jar", "app.jar"]