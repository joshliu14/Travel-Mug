# Use Node.js image as basei mage
FROM node:14

# Set working directory inside container
WORKDIR /app

# Copy package.json and packages-lock.json files into working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which app will run
EXPOSE 3000

# Set the command to run the app when the containser starts
CMD ["npm", "start"]