import express from 'express'
import { createItem, getAllItems } from '../controllers/fileController.js';


const router = express.Router();

router.post('/data', createItem)
router.get('/data', getAllItems)


export default router
