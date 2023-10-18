const jwt = require("jsonwebtoken");
const token_secret = "dvf025vx4d2vs5vs2vqe1bf2ds5gbsfd6sf52sd2fxb5sdgb8gf5dh5z5rdf6hbdfb9d8gbrs74b1fg"; // Secret keys that should never come back

const authentification = (req, res, next) => {
  try {
    let userId = -1;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, token_secret);
    console.log("decodedToken",decodedToken);
    if (decodedToken != null) {
      userId = decodedToken.userId;
      console.log(userId);
    }
    if (userId < 0) {
      throw "Invalid user ID";
    } else {
      req.userId = userId ;
      next();
    }
  } catch {
    res.status(401).json({
      error: "You should first log in!",
    });
  }
};

const generateToken = (userData) => {
  return jwt.sign({ userId: userData }, token_secret, { expiresIn: "24h" });
};

const token = token_secret;

module.exports = { generateToken , authentification , token }
