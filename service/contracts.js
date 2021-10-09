import { contracts } from '../models';

exports.getAllContracts = async () => {
  try {
    const allContracts = await contracts.findAll();
    console.log(allContracts);
  } catch (error) {
    console.log(error);
  }
}
