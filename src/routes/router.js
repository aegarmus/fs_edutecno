import express from 'express'
import { createItem, getAllItems, updateItems } from '../controllers/fileController.js';


const router = express.Router();

router.post('/data', createItem)
router.get('/data', getAllItems)
router.put('/data/:id', updateItems)


export default router
