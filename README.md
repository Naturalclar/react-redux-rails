# React-Redux-Rails

[![Greenkeeper badge](https://badges.greenkeeper.io/Naturalclar/react-redux-rails.svg)](https://greenkeeper.io/)

A Boilerplate for React with Redux and Rails 5.1, using the `webpacker` gem.

## Demo

You can see a demo with counter app running [here](https://ancient-escarpment-50321.herokuapp.com/)

## Usage

- Clone Repository

`git clone https://github.com/Naturalclar/react-redux-rails.git project-name`

- Install dependencies

`cd project-name`
`yarn install`
`bundle install --without production`

- Start Server

You will need to run following two commands to start the server

`rails s`
`./bin/webpack-dev-server`

Or if you have`foreman` gem installed, you can run the following command.

`foreman start -p 3000`

You can access your project by accessing `localhost:3000` on your browser.

## What's in this boilerplate?

### FrontEnd
- [React](https://reactjs.org/)

### State Handling
- [Redux](https://redux.js.org/)

### Style
- [Radium](https://formidable.com/open-source/radium/)
