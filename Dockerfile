# Use an official Node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 and start the app
EXPOSE 3000
CMD ["npm", "start"]
