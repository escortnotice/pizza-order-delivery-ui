FROM nginx:1.17.1-alpine

#install node and npm
RUN apk add --update nodejs nodejs-npm

# to fix the issue on openshift build where it was not able to install angular cli.
#this only occurred on the aarch64 variant of the image. The only thing different is the architecture.
# ref url: https://github.com/oznu/docker-homebridge/issues/93
RUN npm config set unsafe-perm true

#install angular cli
RUN npm install -g @angular/cli@8.3.23

#install bash
RUN apk update
RUN apk upgrade
RUN apk add bash

# make this the working directory, hereon all commands will be run here by default
WORKDIR /usr/src/app

# Copy all the contents of current folder(the project files) to /usr/src/app folder
COPY . .

#to read package.json and install dependencies
RUN npm install --silent

# build the app
RUN ng build --prod

#copy the build from dist folder in to nginx folder to get served.
RUN cp -r dist/pizza-order-delivery-ui/. /usr/share/nginx/html


##The official NGINX docker container published on docker hub does not run on Openshift, 
## because of OpenShift security constraints. Hence it needs the below entries in docker file to run on openshift
## also due to security restrictions, it cannot bind on port 80, so use some other port (like:8081 here)

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

# override the default port 80 on nginx and make the app available on port 8081
RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf

EXPOSE 8081
