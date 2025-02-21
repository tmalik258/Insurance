# Use Node.js image for development
FROM node:22.13.1-bullseye-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .
COPY next.config.ts ./next.config.ts

# Expose port 3001 for nextjs dev server (default is 3001)
EXPOSE 3000

# Start development server with hot reloading
CMD ["npm", "run", "dev"]
