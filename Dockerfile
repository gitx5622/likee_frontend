# Dockerfile References: https://docs.docker.com/engine/reference/builder/
# Start from the latest node base image
FROM node:latest

# Add Maintainer Info
LABEL maintainer="George Gitau <gits5622@gmail.com>"

# Set the working directory to /home/app
WORKDIR /

# Bundle app source
COPY . /
# Run npm install to install dependencies
RUN npm install

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:3000 || exit 1

# Expose port 8080 to the outside world
EXPOSE 3000

#Run the application
CMD ["npm","start"]