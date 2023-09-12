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

    const person = await Person.findOne({ name: user_id });

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
    const { name } = req.body;

    // check if name is a string
    if (typeof name !== "string") {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Name must be a string" });
    }

    const person = await Person.findOne({ name });

    if (person) {
      return res.status(StatusCodes.CONFLICT).json({ message: "Person already exists" });
    }

    const newPerson = new Person({ name });

    await newPerson.save();

    res.status(StatusCodes.CREATED).json({ newPerson });
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

    const person = await Person.findOne({ name: user_id });

    if (!person) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Person not found" });
    }

    // check if name is a string
    if (typeof req.body.name !== "string") {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Name must be a string" });
    }

    // use the param name to update the person name
    // person.name = user_id;

    // update person
    person.name = req.body.name;

    // save updated person
    await person.save();

    // const person = await Person.findByIdAndUpdate(user_id, req.body, { new: true });

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

    const person = await Person.findOne({ name: user_id });

    if (!person) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Person not found" });
    }

    await person.deleteOne();

    res.status(StatusCodes.OK).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};
