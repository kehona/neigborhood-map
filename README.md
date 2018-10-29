# Neigborhood-map

This is one of the projects for Udacity Nanodegree program. It's an app that shows the locations of areas to go brouse for internet in a neighborhood. This app was build from scratch using [create-react-app](https://github.com/facebook/create-react-app). This application bootstraps both the client (`react`) and the server (`NodeJS`).

## Built With

- [React](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Google Maps](https://cloud.google.com/maps-platform/)
- [Foursquare](https://foursquare.com/)

## TL;DR

To get the app running,

- install all project dependencies with `npm install`
- start the development server with `npm run dev`

## Code structure

- The app is build as a node application. The `client` folder contains the `react` application.

## Backend Server

For development process, I created a backend node server that exposes an API that interacts with [foursquare](https://foursquare.com/) location api. The following operations(s) are exposed:

- [`getMapData`](#getall)

### `getAll`

Method Signature:

```js
getMapData();
```

- Returns a Promise which resolves to a JSON object containing a collection of location data.
- This collection represents the locations of local places you can get access to wifi.
