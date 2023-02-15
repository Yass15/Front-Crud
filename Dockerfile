# Use an existing Node.js image as the base image
FROM node:14

# Set the working directory inside the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the project files to the image
COPY . .

# Build the Angular project
RUN npm run build

# Expose the port where the Angular development server will run
EXPOSE 4200

# Start the Angular development server
CMD [ "npm", "start" ]
