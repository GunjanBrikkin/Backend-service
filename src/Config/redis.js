const redis = require("redis");

const redisClient = redis.createClient();

redisClient.on("error", (err) => {
    console.log("Redis Error:", err);
});

redisClient.connect();

module.exports = redisClient;