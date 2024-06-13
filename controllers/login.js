const RegisterModel = require("../models/register");

   

   const handleLogin = async (req, res) => {
    console.log(req.body)
    try {
      const { email, password } = req.body;
      const user = await RegisterModel.findOne({ email});
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        console.log("login")
        res.status(200).json({
             message: 'Login successful',
                selectedType: user.selectedType

         });
    }
    catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {handleLogin};