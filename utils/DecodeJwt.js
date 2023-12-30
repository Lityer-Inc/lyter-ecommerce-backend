

export const DecodeJwt = async (req, res) => {
    // const authHeader = await req.headers["authorization"];
    // if (authHeader && authHeader.startsWith("Bearer ")) {
    //     const token = authHeader.split(" ")[1];
    //     if (!token) {
    //         return res.json({
    //             message: "No token available",
    //             status: 401
    //         });
    //     };

    //     jwt.verify(token, "SECRET", async (err, decodedToken) => {
    //         if (err) return res.json({
    //             message: "Invalid token",
    //             status: 401
    //         });

    //         let customer = await Customer.findOne({ where: { id: decodedToken.id } })
    //         if (!customer) return res.json({message: "User not found", status: 401});
    //         console.log("customer : ", customer);
    //         console.log("decodedToken : ", decodedToken);
    //         res.json({userDetails: customer.dataValues, status: 200});
    //     });
    // }
}

