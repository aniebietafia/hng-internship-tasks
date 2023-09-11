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
    const { user_id } = req.params;

    const person = await Person.findById(user_id);

    if (!person) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Person not found" });
    }

    res.status(StatusCodes.OK).json({ person });
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

/**
 * @description Update a person dynamically
 * @route PUT /api/user_id
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a person object
 */

export const updatePerson = async (req, res) => {
  try {
    const { user_id } = req.params;

    const person = await Person.findByIdAndUpdate(user_id, req.body, { new: true });

    res.status(StatusCodes.OK).json({ person });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

/**
 * @description Delete a person dynamically
 * @route DELETE /api/user_id
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} - Returns a person object
 */

export const deletePerson = async (req, res) => {
  try {
    const { user_id } = req.params;

    await Person.findByIdAndDelete(user_id);

    res.status(StatusCodes.OK).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};
