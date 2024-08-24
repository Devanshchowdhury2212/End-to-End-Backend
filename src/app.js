import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("Public_asset"))
app.use(cookieParser()) 


export default app