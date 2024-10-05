import express from "express";
import http from 'http'
import cors from 'cors'
import errorHandler from '../middleware/errorHandler.js'

const createServer = (app) =>{
    app.use(
        cors({
            origin: [
                'http://localhost:5173'
            ],
            methods:['GET','POST','DELETE','PUT'],
            allowedHeaders:['Content-Type','Authorization','x-auth-token']
        }),
    );
    app.use(express.json())

    const server = http.createServer(app);
    app.use(errorHandler)
}


export default createServer;