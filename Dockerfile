# ---------- Stage 1: Build with pnpm ----------
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Create app directory
WORKDIR /app

# Copy only lock and manifest first for caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy rest of the app
COPY . .

# Build the React app
RUN pnpm build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
