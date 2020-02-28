## Backend for this UI

https://github.ibm.com/shuroych/fooditemsorderdeliveryapi.git

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

ng build --prod

We can also use ' ng build --prod --configuration="production" ', or 


' ng build --prod --configuration="staging" ' to use environment files respective to environments.
Angular.json entry as below:
"staging" : {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.stg.ts"
                }
              ]
            }


## urls:
http://localhost:4200/user-orderstatus
http://localhost:4200/admin-orderstatus

## Docker Commands

Build the docker image by running the command from the directory where Dockerfile is present:
> docker build -t <repository name>:v10.0 .
ex: docker build -t escortnotice/pizza-order-delivery-ui .

Push to docker hub:
> docker push <repository name>:v10.0

Run the container on the local machine
>docker container run --name pizza-order-delivery-ui -p 80:80 escortnotice/pizza-order-delivery-ui:latest

Login to container command shell
> docker container ls --all    (to get list of all running or stopped containers)
> docker exec -it <container id> /bin/bash