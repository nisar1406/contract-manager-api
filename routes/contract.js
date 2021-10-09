import express from 'express';
import {getAllContracts} from '../controller/contracts';

const router = express.Router();

router.get("/get-all-contracts", getAllContracts);

module.exports = router;
