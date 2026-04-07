const express = require('express');
const redis   = require('redis');

const app    = express();
const PORT   = process.env.PORT || 3000;

// Connect to Redis using the CONTAINER NAME as hostname
// This works because both containers are on the same custom network
const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || 'redis',   // ← container name as DNS
    port: process.env.REDIS_PORT || 6379
  }
});

client.on('error', err => console.error('Redis error:', err));
client.connect();

app.get('/', async (req, res) => {
  const visits = await client.incr('visits');
  res.json({
    message:  'Hello from Docker networking!',
    visits:   visits,
    redis:    process.env.REDIS_HOST || 'redis'
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
