# Step 1: Build Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build
RUN npm run export  # export static HTML to out/ folder

# Step 2: Serve static files with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config (optional, see below)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
