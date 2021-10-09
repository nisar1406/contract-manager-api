import bcrypt from 'bcryptjs';
import { pool } from '../config/pool';
import jwt from 'jsonwebtoken';
import { secret, expireTime } from '../config/jwt.config';

exports.register = async (data, callback) => {
  const { fullName, email, password } = data;
  const salt = await bcrypt.genSalt(10);
  const userPassword = await bcrypt.hash(password, salt);
  pool.query(
    `INSERT INTO public.users (fullname, email, password) VALUES ($1, $2, $3)`,
    [fullName, email, userPassword],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};

exports.login = async (data, callback) => {
  const { email, password } = data;
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];
  try {
    const { rows } = await pool.query(query, values);
    if (rows.length > 0) {
      const isPasswordValid = await bcrypt.compare(password, rows[0].password);
      const { fullname, email } = rows[0];
      if (isPasswordValid) {
        const token = jwt.sign({
          email: email,
          fullName: fullname
        }, secret, { expiresIn: expireTime })
        return callback(null, 200, token);
      } else return callback('error', 404, 'Invalid credentials.')
    } else return callback('error', 404, 'User not found.');
  } catch (error) {
    return callback('error', 500, 'Something went wrong.');
  };
};
