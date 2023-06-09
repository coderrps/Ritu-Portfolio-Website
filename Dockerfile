# Use an official Node runtime as a parent image
FROM node:14.5.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 8000

# Define the command to run the app
CMD [ "npm", "start" ]
