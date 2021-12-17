import usersService from "../service/user";

exports.register = (req, res, next) => {
  // Validation area
  const { fullName, email, password } = req.body;
  const data = {
    fullName: fullName,
    email: email,
    password: password,
  };
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      if (Number(error?.original?.code) === 23505) return res.status(409).send({ success: 0, message: "Email already exist." });
      else return res.status(400).send({ success: 0, message: "Bad request" });
    }
    return res.status(201).send({
      success: true,
      message: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };
  usersService.login(data, (error, statusCode, results) => {
    if (error) {
      return res.status(statusCode).send({ success: 0, message: results });
    }
    return res.status(200).send({
      success: true,
      message: 'Login successful',
      token: results,
    });
  });
};
