const express = require("express")
const app = express()   //  <>
const port = 3000

app.use(express.json())

const routes = require('./routes/productos.routes.js');
app.use('/productos', routes)

app.get("/", (req, res) => {
  res.send("aprobame y te traigo sandwichito de miga :) XD")
})

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
})  // </>