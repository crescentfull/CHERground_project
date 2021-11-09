import App from './app';

const server = new App().server;

const port = 3000;

server.listen(port, () => {
    console.log(`app listening on port ${port}`);
}).on('error', err => {
    console.log(err);
})