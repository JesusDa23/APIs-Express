const {req,res} = require('express');
const { ObtenerUnPedido, crearUnPedido, eliminarUnPedido, actualizarUnPedido } = require('../services/pedidosmenu.service');


const obtenerPedidos = async (req, res) => {
    try{
        const data = await ObtenerUnPedido()
        res.json({
            ok:true,
            data,
            msg: 'Muestra los pedidos exitosamente'
        })
    }
    catch(error){
        console.error(error)
        res.json({
            ok: false,
            msg: 'error al obtener el menu'
        })
    }
}



const crearPedido = async (req,res) => {
    const pedido = req.body;
    try{
        const data = await crearUnPedido(pedido)
        res.json({
            ok: true,
            data,
            msg:'Se creo el pedido exitosamente'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:false,
            msg: 'Ocurrio un error al crear el pedido'
        })
    }
}

const eliminarPedido = async (req,res) => {
    const id = req.params.id
    try{
        const data = eliminarUnPedido(id)
        res.json({
            ok:true,
            data,
            msg: 'Se borro correctamente el pedido'
        })
    }catch(error){
        console.error(error)
        res.json({
            ok:true,
            msg: 'Ocurrio un error al borrar el pedido'
        })

    }
}
const actualizarPedido = async (req,res) => {
    const id = req.params.id
    const newData = req.body
    try{
        const dataActualizada =await actualizarUnPedido(id, newData)
        res.json({
            ok:true,
            data: dataActualizada,
            msg: 'Se actualizo correctamente el pedido'
        })
    }catch(error){
        console.error(error);
        res.json({
            ok:false,
            msg:' Ocurrio un error al actualizar el pedido'
        })
    }
}
module.exports = {
    obtenerPedidos,
    crearPedido,
    eliminarPedido,
    actualizarPedido
}