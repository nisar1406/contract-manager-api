import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { users } from '../models';
import { secret, expireTime } from '../config/jwt.config';


exports.register = async (data, callback) => {
  const { fullName, email, password } = data;
  // userData.isNewRecord
  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const userData = {
      fullname: fullName,
      email: email,
      password: encryptedPassword
    };
    const createUser = await users.create(userData);

    if (createUser?._options?.isNewRecord) {
      return callback(null, `Registration successful`);
    }
  } catch(error) {
    return callback(error);
  }
};

exports.login = async (data, callback) => {
  const { email, password } = data;
  try {
    const userData = await users.findByPk(email);
    if (userData?.dataValues) {
      const isPasswordValid = await bcrypt.compare(password, userData?.dataValues?.password);
      if (isPasswordValid) {
        const { fullname, email } = userData?.dataValues;
        const token = jwt.sign({
          email: email,
          fullName: fullname
        }, secret, { expiresIn: expireTime })
        return callback(null, 200, token);
      } else return callback('error', 404, 'Invalid credentials.')
    } else return callback('error', 404, 'User not found.');
  } catch (error) {
    return callback('error', 500, 'Something went wrong.');
  }
};
