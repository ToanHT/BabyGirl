module.exports = {
    name: 'API',
    env: process.env.NODE_ENV || 'developement',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: process.env.MONGODB_URL || 'mongodB://127.0.0.1:27018'
    }
}