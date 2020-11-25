#!/bin/bash

## Rebuild the Angular App (Nginx Docker Container)
cd frontend 
rm -rf dist
npm run build
docker build -t luisgonzalez/frontend .

cd ..

## Rebuild the Quarkus App (Java Mvn)
cd backend
./mvnw clean package -Dquarkus.container-image.build=true 

## Run Front+Back+MongoDB
docker-compose up
