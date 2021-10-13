import express from 'express';
import { getAllContracts, createContract, getContractByUserEmail, deleteContractById } from '../controller/contracts';

const router = express.Router();

router.get("/get-all-contracts", getAllContracts);
router.post("/create-contract", createContract);
router.post("/get-contract-by-id", getContractByUserEmail);
router.delete("/:contractId", deleteContractById);

module.exports = router;
