const bcrypt = require('bcrypt');
const User = require('../model/usermodel');

const Register = async (req, res) => {
    try {

        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            return res.status(404).json({
                error: "please Enter All Field..!"
            });
        }
        const emailexit = await User.findOne({email: email});
        if (emailexit){
            return res.status(404).json({ message: "Email Already Exists"});
        }

        var hash = bcrypt.hashSync(password, 10);
        const data = await User({
            username: username,
            password: hash,
            email: email
        });

        await data.save();
        return res.status(200).json({ message: "User Create Successful"});
    } catch (error) {
       
        return res.status(400).json({ error: "Somthing Went Wrong..!" });
    }
};

const Login = async (req, res) => {
    try {

        const{username, password} = req.body;
        if (!username || !password) {
            return res.status(404).json({ 
                error: "please Enter the field...!"
            });
            
        }

        const userData = await User.findOne({username : username});
        if (!userData) {
            return res.status(404).json({ message: "password is incorrect....!"})
        };

        const userCompare = await bcrypt.Compare(req.body.password, userData.password);
        if (!userCompare) {
            return res.status(404).json({ message: "password is incorrect....!"});
        };
        await userData.save();
        return res.status(200).json({ message: "success!" });

    } catch (err) {
        return res.status(403).json({ error: "there was an error "});
    }
}

module.exports = { Register, Login };