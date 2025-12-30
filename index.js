import express from "express"
import authRouter from "./auth.js"

const app = express()

app.use('/auth', authRouter)

app.listen(3000, ()=> {
    console.log("Connected to database")
    console.log("server started at port 3000")
})