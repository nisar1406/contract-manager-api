import { getAllContracts, createContract, getContractByUserEmail, deleteContractById } from "../service/contracts";

exports.createContract = (req, res, next) => {
  const { vendorName, categoryName, cost, endDate, createdBy, vendorId, categoryId } = req?.body;
  const data = {
    vendorname: vendorName,
    categoryname: categoryName,
    cost: cost,
    enddate: endDate,
    fk_user: createdBy,
    fk_vendor: vendorId,
    fk_category: categoryId
  };
  createContract(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.getContractByUserEmail = (req, res, next) => {
  const { email } = req?.body;
  const data = {
    userEmail: email
  };
  getContractByUserEmail(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  })
};


exports.deleteContractById= (req, res, next) => {
  const { contractId } = req?.params;
  const data = {
    id: contractId
  };
  deleteContractById(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(error).send({ success: 0, message: results });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  })
};


exports.getAllContracts = (req, res, next) => {
  const data = {};
  getAllContracts(data, (error, results) => {
    if (error) {
      console.log('errpr ===>', error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  })
};

