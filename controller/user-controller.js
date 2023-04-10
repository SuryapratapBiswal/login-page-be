import User from '../model/user.shema.js'
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken";




export const userSignup = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const encryptedPassword = await bcrypt.hash(password, 10);

        const oldUser = await User.findOne({ email })

        if (oldUser) {
            return res.json({ error: "User Exist" })
        }
        const result = await User.create({
            first_name,
            last_name,
            email,
            password: encryptedPassword
        });
        res.send(result)
    } catch (error) {
        res.send({ satus: "error" })
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = Jwt.sign({ email: user.email },"hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe", {
            expiresIn: "2h"
        })
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" })
}

export const getAllUser = async (req, res) => {
    const token  = req.headers.authorization.split(" ")[1];
    try {
        const user = Jwt.verify(token,"hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe", (err, res) => {
            if (err) {
                return "token expired";
            }
            return res;
        });
        console.log(user);
        if (user == "token expired") {
            return res.send({ status: "error", data: "token expired" });
        }

        const useremail = user.email;
        User.find()
            .then((data) => {
                res.send({ status: "ok", data: data });
            })
            .catch((error) => {
                res.send({ status: "error", data: error });
            });
    } catch (error) { }

}