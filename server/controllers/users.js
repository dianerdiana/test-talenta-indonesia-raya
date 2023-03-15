const { User } = require('../models')
const Joi = require('joi')
const { Op } = require('sequelize')

exports.addData = async (req, res) => {
  const { fullname, age, gender } = req.body

  const Schema = Joi.object({
    fullname: Joi.string().min(3).required(),
    age: Joi.number().min(1).required(),
    gender: Joi.string().min(1).required(),
  })

  const { error } = Schema.validate({ fullname, age, gender })

  if (error) {
    return res.status(400).send({
      status: 'error',
      message: error.message,
    })
  }

  try {
    const newUser = await User.create({
      fullname,
      age,
      gender,
    })

    res.status(200).send({
      status: 'success',
      message: 'Data created successfuly',
      data: {
        fullname: newUser.fullname,
        age: newUser.age,
        gender: newUser.gender,
      },
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error,
    })
  }
}

exports.getAllData = async (req, res) => {
  try {
    const users = await User.findAll()

    res.status(200).send({
      status: 'success',
      data: users,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error,
    })
  }
}

exports.getBarData = async (req, res) => {
  try {
    const { count, row } = await User.findAndCountAll({
      where: {
        gender: {
          [Op.like]: 'Male%',
        },
      },
    })

    res.status(200).send({
      data: count,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error,
    })
  }
}
