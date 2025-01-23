const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Bus = require('./models/bus');  
const Reserve = require('./models/reserve'); 

const cors = require('cors');
const app = express();

 app.use(bodyParser.json());
app.use(cors());  

 mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

 app.post('/api/register', async (req, res) => {
  const { username, password, name, age, phone,gender,addr,adhaar,role } = req.body;
  try {
     const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = new User({ username, password: hashedPassword,name,age,phone,gender,addr,adhaar,role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

 app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
     const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
     const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
     const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
    res.json({ token,user });
   

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


 app.get('/api/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.get('/api/buses/:id', async (req, res) => {
  try {
    const id=req.params.id;
    const buses = await Bus.findOne(id);
    res.json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
 app.post('/api/buses', async (req, res) => {
  const { busNumber, capacity, busname, start, end,date } = req.body;
  try {
    const bus = new Bus({ busNumber, capacity,busname, start, end,date});
    await bus.save();
    res.status(201).json({ message: 'Bus added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

 app.put('/api/buses/:id', async (req, res) => {
  const { busNumber, capacity, busname, start, end, date } = req.body;
  const { id } = req.params;
  try {
    const bus = await Bus.findOne({busNumber:id});
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
     bus.busNumber = busNumber;
    bus.capacity = capacity;
    bus.busname=busname;
    bus.start=start;
    bus.end=end;
    bus.date=date;
    await bus.save();
    res.json({ message: 'Bus updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
 
 app.delete('/api/buses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findById(id);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    await bus.remove();
    res.json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.post('/api/reserve/', async (req, res) => {
  const { busNumber, name, username,busname, start, end,gender,phone } = req.body;
  try {
    const reserve = new Reserve({ busNumber, name,username,busname, start, end,gender,phone});
    await reserve.save();
    res.status(201).json({ message: 'Reservation added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.get('/api/reserve/', async (req, res) => {
  try {
    const reservations = await Reserve.find();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.delete('/api/reserve', async (req, res) => {
  const { userid } = req.body.userId;
  try {
    const bus = await Bus.findOne({username:userid});
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    await bus.remove();
    res.json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
