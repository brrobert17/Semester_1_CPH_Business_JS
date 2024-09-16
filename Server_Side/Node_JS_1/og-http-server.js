import {createServer} from 'node:http';

const ogHttpServer = createServer((req, res) => {

    if(req.method === 'POST') {

        const bodyStream = [];
        req
            .on('data', (chunk) => {
                bodyStream.push(chunk);
            })
            .on('end', () => {
                const bufferData = Buffer.concat(bodyStream);
                const requestBody =  JSON.parse(bufferData);

                console.log('Request Body :>> ',requestBody);
                res.end('All good!');
            });
    } else {
        res.end('Hello World!');
    }
});

ogHttpServer.listen(4000, '127.0.0.1', ()=>{
    console.log("Server started!");
})