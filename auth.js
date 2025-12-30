import { Router } from "express";

const authRouter = Router()

authRouter.get('/profile', (req, res)=> {
    res.json({name: "shrawan", age: 21})
})

export default authRouter