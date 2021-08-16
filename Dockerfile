# pull official base image
FROM node:14.16.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn --silent --no-cache

# add app
COPY src src
COPY webpack webpack/
COPY public public
COPY tsconfig.json ./
COPY .babelrc ./

# start app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19.9-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]