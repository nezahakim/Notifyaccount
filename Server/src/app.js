import createServer from "./config/server";
import express from "express";
import logger from "./utils/logger";
import authRoutes from './routers/authRoutes'

const app = express();
const server = createServer(app)
const PORT = process.env.PORT

app.use('/api/auth', authRoutes)
app.use("/api/users", usersRoutes)

server.listen(PORT, ()=>{
    logger.info(` Server running on port: ${PORT}`)
})

export default app;




