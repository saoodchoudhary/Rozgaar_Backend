
const CompanyRegisterModel = require('../models/companyRegister');
const RegisterModel = require('../models/register');


const handleRegister = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, password, selectedType } = req.body;
    
    if (selectedType === 'talent') {

      const newUser = new RegisterModel({ name, email, password, selectedType });
      await newUser.save();
    }
    else {
      const newUser = new CompanyRegisterModel({ name, email, password, selectedType });
      await newUser.save();
    }
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleRegister };