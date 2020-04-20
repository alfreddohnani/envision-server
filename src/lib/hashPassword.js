const crypto = require("crypto");
require("dotenv").config({ path: "variables.env" });

const hashPassword = str => {
    // Create a SHA256 hash
    if (typeof str == "string" && str.length > 0) {
        const hash = crypto
            .createHmac("sha256", process.env.HASHINGSECRET)
            .update(str)
            .digest("hex");

        return hash;
    } else {
        return false;
    }
};

module.exports = hashPassword;
