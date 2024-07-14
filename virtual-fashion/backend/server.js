const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clothesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const clothesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  img: String
});

const Clothes = mongoose.model('Clothes', clothesSchema);

app.get('/clothes', async (req, res) => {
  try {
    const clothes = await Clothes.find();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Serve static files from the images directory
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
