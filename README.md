# Data Visualization App

Single page web app which visualizes live MQTT broker metrics.

Demo live at: [digiterra.kagan.dev](http://94.250.203.170:9002/)

![](https://i.hizliresim.com/9se8cm0.png)

## Features

- Responsive
- UI Components
- TailwindCSS
- Standardized Data Hooks
- MQTT Connection

## Configuration

### Installation

You've 2 option:

1- npm run build
2- Docker build
More info: [docs.docker.com](https://docs.docker.com/get-started/)

### How to change environment file

The setup for Data Visualization App would look like this for example:

```
REACT_APP_CLIENT_ID="******"
REACT_APP_RECONNECT_PERIOD=xxxx
REACT_APP_CONNECTION="ws://xxxx:PORT/mqtt"
```
