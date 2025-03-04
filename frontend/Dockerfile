# Use Node.js image for development
FROM node:22.13.1-bullseye-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Create a non-root user
RUN useradd -m -r -u 1001 appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port 3000 for nextjs dev server (default is 3000)
EXPOSE 3000

# Start development server with hot reloading
CMD ["npm", "run", "dev"]
