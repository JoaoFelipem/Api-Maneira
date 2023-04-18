import {App} from "./src/app";

const port = process.env.Port || 3000;

const app = new App(port);

app.start();