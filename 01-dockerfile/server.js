const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENV  = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Docker!',
    environment: ENV,
    hostname: require('os').hostname(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});
// a commit
