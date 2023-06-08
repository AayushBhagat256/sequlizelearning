const db = require('../models/model');
const User = db.user;

const addUser = async (req, res) => {
  try {
    const jane = await User.create({ firstName: req.body.firstName, lastName: req.body.lastName });
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"

    console.log('Jane was saved to the database!');
    res.status(200).json({
      message: "Data saved",
      data: jane.toJSON(),
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({
      message: "Error saving user",
    });
  }
};

const getUser = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({
        message: "Error retrieving users",
      });
    }
};

const getuserID = async (req,res) => {
    try{
        const userID = req.params.id;
        const users = await User.findByPk(userID);
        res.status(200).json(users);
    }catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({
          message: "Error retrieving users",
        });
    }
}

const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedFields = req.body;
  
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.update(updatedFields);
  
      res.status(200).json({
        message: 'User updated successfully',
        data: user,
      });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({
        message: 'Error updating user',
      });
    }
};

const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.destroy();
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user' });
    }
};

module.exports = {
  addUser,
  getUser,
  getuserID,
  updateUser,
  deleteUser,
};
