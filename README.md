# Covid-19Symtoms

This application allows start a patient's medical history
![ezgif-3-a7db9bc9e74f](https://user-images.githubusercontent.com/32238112/78615200-6f5aa500-7836-11ea-810a-8fd77387d8bb.gif)

## Running the website
Since this application is not a static application, you should have some thinks to do before you can start.
### Requirements
- NodeJS: If you have not Mongo you can download it in <a href="https://nodejs.org/es/download/"> Node JS Documentation</a>
- MongoDB If you have not Mongo you can download it in <a href="https://docs.mongodb.com/manual/installation/">MongoDB Community Server</a>. Alternativetly you can use MongoDB Atlas <a href="https://www.mongodb.com/cloud/atlas">MongoDB Community Server</a> 

Once you have it installed, run:
```
mongod
```
In order to start the database server

## Video
![Explanation video](https://www.youtube.com/watch?v=ckbztljtAP4&feature=youtu.be)


**Important information**
You need to create three environments variables to this project
- `DATABASE_URL=<yourDatabaseURL>` where yourDatabaseURL is the direction to your database. ExampleDATABASE_URL=mongodb://localhost/name
- `SECRET_OR_KEY=<secretWord>`: Where secretWord is a String o code that you must save in secret.
### Requirements
On the root folder of the proyect

```bash

# Run mongodb
mongodb

# Install dependencies for client
yarn run client-install

# Install dependencies for server
yarn install

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn start

# Run the server with nodemon
yarn run server

# Run the React client only
yarn run client

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

<hr>


## Author
Mateo León Alzate & Valerie Parra Cortés
## Slides

You can find the slides ![here](https://docs.google.com/presentation/d/1KYO9xu8C0rOEcVoWKdnQq5Lx8_G_dsJhrCf_IHb1qUM/edit?usp=sharing)
 
## License
The MIT License (MIT)

Copyright (c) Mateo León Alzate & Valerie Parra Cortés

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
