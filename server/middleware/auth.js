import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
console.log("middleware");
    try {
        
        const token = req.headers.authorization.split(" ")[1];

        if(token) {
            let decodedData = jwt.verify(token, process.env.secretKey);

            req.userID = decodedData?.id;

            next();
        }
    } catch (error) {
        console.log(error);
    }
}

export default auth;