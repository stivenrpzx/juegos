const express = require("express");
const morgan = require ("morgan");
const database = require("./database");

//configuraion inicial
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Recibendo comunicacion del puerto"+app.get("port"));

//middlewares
app.use(morgan("dev"))


//rutas
app.get("/productos", async (req,res)=>{
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * from producto");
    console.log(result)
    res.json(result)
})