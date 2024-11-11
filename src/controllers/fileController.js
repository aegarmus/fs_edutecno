import { createData, getAllData, updateData } from "../utils/fileUtils.js";


export const createItem = async(req, res) => {
    try {
        const data = req.body
        await createData(data);

        res.status(201).json({
            message: 'Data created Succesfully',
            status: 201,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error at create data',
            status: 500,
            error
        })
    }
}

export const getAllItems = async(req, res) => {
    try {
        const data = await getAllData()
        
        res.status(200).json({
            message: 'Data founded succesfully',
            status: 200,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Data not Found',
            status: 404,
            error
        })
    }
}


export const updateItems = async(req, res) => {
    try {
        const id  = Number(req.params.id);
        const newData = req.body;

        const modifiedOldData = updateData(id, newData)

        res.status(202).json({
            message: 'Update data succesfully',
            status: 202,
            oldData : modifiedOldData,
            newData
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Error at update data',
            status: 500,
            error
        })
    }
}