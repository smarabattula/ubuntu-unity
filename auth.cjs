const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const app = express();
const uri = "mongodb+srv://dakalath:abcdefgh@cluster0.8yemejd.mongodb.net/Test?retryWrites=true&w=majority";
app.use(cors());

// Use the cors middleware
app.use(express.json());


// Connect to MongoDB
mongoose.connect(uri, { "useNewUrlParser": true, "useUnifiedTopology": true, "maxPoolSize": 50 });

// Define a Mongoose schema for the user
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Create a Mongoose model for the user
const User = mongoose.model('User', userSchema);

// Define a route to handle account creation
app.post('/createAccount', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error("Error creating account:", error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
    try {
      // Assuming you have a User model defined
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
  
      if (user) {
        res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error("Error authenticating user:", error.message);
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  });
  
// Start the Express server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
