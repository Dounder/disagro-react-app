# Use the official Bun image for development
FROM oven/bun:1.0.0 as development

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lock (or package-lock.json if using npm)
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the development server with hot-reloading
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]