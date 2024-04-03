#!/usr/bin/env node

const fs = require('fs');

const content = `
@path = http://localhost:8070
@token = Token ...


### get brukere

GET {{path}}/bruker/1 HTTP/1.1

### POST


POST {{path}}/bruker HTTP/1.1
Content-Type: application/json

/* body here */  

`

fs.writeFile(
    `${process.cwd()}/client.http`,
    content,
    (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log("succesfully created: ", data);
        }
    });


