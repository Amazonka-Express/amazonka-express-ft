FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Build the SvelteKit application
RUN pnpm build

# Create production image
FROM node:18-alpine AS production

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy built artifacts and necessary files
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/static ./static

# Expose application port
EXPOSE 3000

# Set environment variables (these should be overridden via docker run/compose)
ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["node", "build/index.js"]