import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/connectdb.js'
import userRouter from "./routing/user.routing.js"
import authRouter from "./routing/auth.routing.js"
import { errorHandler } from './middleware/error.middleware.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from "cors"

const corsOptions = {
    origin: "http://localhost:5173"
}

connectDB()
const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(cookieParser())

app.use("/",userRouter)
app.use("/",authRouter)


app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log("Listning on port 8000");
    
})