const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const productosController = {
  obtenerTodos: async (req, res) => {
    const productos = await prisma.productos.findMany();
    return res.json(productos);
  },

  obtenerUno: async (req, res) => {
    const { id } = req.params;
    const producto = await prisma.productos.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!producto) {
      return res.status(404).send({message: 'No se encontro el producto'})
    }

    return res.json(producto)
  },

  crear: async (req, res) => {
    const { nombre, precio } = req.body;

    const productoNuevo = await prisma.productos.create({
      data: {nombre, precio}
    })

    return res.json(productoNuevo)
  },}
  module.exports=productosController