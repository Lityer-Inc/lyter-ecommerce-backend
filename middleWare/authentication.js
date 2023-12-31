import jwt from 'jsonwebtoken';

// Middleware for checking JWT
export const authentication = async (req, res, next) => {
    const authHeader = await req.headers.authorization;
    const token = authHeader.split(" ")[1];
    console.log('token : ', token);
    if (!token) {
        return res.status(401).json({
            error: "Unauthorized"
        })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                error: "Unauthorized: Invalid token"
            });
        }
        req.decoded = decoded;
        next()
    })
}