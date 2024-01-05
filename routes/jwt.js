import jwt from 'jsonwebtoken';

export const jwtVerify = (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    console.log("token : ", token);
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
        return res.status(200).json(decoded);
    })
};