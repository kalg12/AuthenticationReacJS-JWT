//importamos el modulo express, jsonwebtoken y cors
const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const cors = require("cors")

//definimos el puerto en una variable
const port = 4000

//agregamos el middleware para que express interprete los datos que llegan en formato json
app.use(express.json())

//ejecutamos cors
app.use(cors())

//creamos las rutas para los metodos get y post

app.get("/api", (req, res) => {
    res.json({
        message: "Hola mundo"
    })
});

//creamos una ruta encargada de crear un token tomando como parametro los datos del usuario
app.post("/api/login", (req, res) => {
    const user = {
        id: 1,
        user: "Kevin",
        password: 123456
    }

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) =>{
        res.json({
            token
        })
    })
});

//creamos una ruta que nos permitirá entrar al apartado de los posts, pero para ello necesitaremos el token
app.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) =>{
        if(error){
            res.sendStatus(403)
        }
        else{
            res.json({
                message: "Post creado",
                authData
            })
        }
    })
});

//creamos la función que nos permitirá verificar el token
//Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken
        next();
    }
    else{
        res.sendStatus(403)
    }
}



/* app.post("/register", (req, res) => {
    res.json("register")
});

app.post("/login", (req, res) => {
    res.json("login")
});

app.get("/profile", (req, res) => {
    res.json("profile")
}); */



//escuchamos en el puerto definido
app.listen(port)

