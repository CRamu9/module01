
import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(process.cwd(), 'public')));

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Set the app to listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});