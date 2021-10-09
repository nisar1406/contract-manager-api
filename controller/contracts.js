import { getAllContracts } from "../service/contracts";

exports.getAllContracts = () => {
  const data ={};
  getAllContracts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, message: "Something went wrong, please try again." });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  })
}
