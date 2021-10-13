import { contracts } from '../models';


exports.createContract = async (data, callback) => {
  try {
    const createdContract = await contracts.create(data);
    if (createdContract) return callback(null, createdContract);
  } catch (error) {
    callback(error)
  }
};

exports.getContractByUserEmail = async (data, callback) => {
  const { userEmail } = data;
  try {
    const contractByUserId = await contracts.findAll(({ where: { fk_user: userEmail } }));
    let contractData = [];
    if (contractByUserId.length > 1) {
      contractByUserId.forEach(v => contractData.push(v.dataValues));
    } else contractData = contractByUserId[0]?.dataValues;
    console.log(contractData);
    if (contractByUserId) return callback(null, contractData);
  } catch (error) {
    console.log(error);
  }
};


exports.deleteContractById = async (data, callback) => {
  const { id } = data;
  try {
    const deletedContract = await contracts.destroy({
      where: { id: id }
    });
    if(deletedContract) return callback(null, 'Contract deleted successfully');
    else callback('error', 'Contract not found');
  } catch (error) {
    callback(error, 500, 'Something went wrong, please try again');
  }
};


exports.getAllContracts = async (data, callback) => {
  try {
    const allContracts = await contracts.findAll();
    return callback(null, allContracts);
  } catch (error) {
    callback(error)
  }
};
