const { Pool } = require("pg");

const pool = new Pool({
user:"postgres",
password:"leeroy12",
host:"localhost",
port:5432,
database:"insighthub"
});

pool.connect()
.then(()=>{
console.log("Database connected");
})
.catch(err=>{
console.error(err);
});

module.exports=pool;