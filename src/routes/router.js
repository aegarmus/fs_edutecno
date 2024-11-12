import express from 'express'
import { createItem, deleteItem, getAllItems, updateItems } from '../controllers/fileController.js';


const router = express.Router();

router.post('/data', createItem)
router.get('/data', getAllItems)
router.put('/data/:id', updateItems)
router.delete('/data/:id', deleteItem)


export default router
