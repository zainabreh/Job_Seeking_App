import jwt from "jsonwebtoken"

export const isAuthenticated = (req,res,next)=>{
    const {auth} = req.cookies
    if(!auth) return next(new Error("login to access this resource"))
    try {
        let authuser = jwt.verify(auth,process.env.TOKEN)
        req.user = authuser
        next()
    } catch (error) {
        next(error)
    }
}

export const isAuthorized = (...roles)=>{
    return (res,req,next)=>{
        if(!roles.includes(req.user.role)) return next(new Error("Not Allowed to access this resource"))

            next()
    }
}