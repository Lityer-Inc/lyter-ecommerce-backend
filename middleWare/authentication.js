import jwt from 'jsonwebtoken';

// Middleware for checking JWT
export const authentication = (req, res, next) =>{

    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            error: "Unauthorized"
        })
    }
     jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
     }
    req.decoded = decoded;
    next()
    })
}