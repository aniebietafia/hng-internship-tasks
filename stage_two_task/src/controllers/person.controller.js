import { StatusCodes } from "http-status-codes";
import Person from "../models/person.model.js";

/**
 * @description Fetch details of a person dynamically
 * @route GET /api/user_id
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a person object
 */

export const fetchPerson = async (req, res) => {
  try {
    const { user_id } = req.query;
    const queryObj = {};

    if (user_id) {
      queryObj.name = { $regex: user_id, $options: "i" };
    }

    const person = await Person.find(queryObj);

    return res.status(StatusCodes.OK).json({ person });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

/**
 * @description Create a person dynamically
 * @route POST /api
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a person object
 */

export const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);

    res.status(StatusCodes.CREATED).json({ person });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};
