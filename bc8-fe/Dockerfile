#Stage 1 -
FROM node:10-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=builder /app/dist /var/www/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]