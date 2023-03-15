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
  const count = async (gender, age, op) => {
    const total = await User.count({
      where: {
        [Op.and]: [
          {
            gender,
          },
          {
            age: { [Op[op]]: age },
          },
        ],
      },
    })

    return total
  }

  try {
    Promise.all([
      count('Female', 19, 'lte'),
      count('Female', 20, 'gte'),
      count('Male', 19, 'lte'),
      count('Male', 20, 'gte'),
    ]).then((total) =>
      res.status(200).send({
        status: 'success',
        message: 'Success',
        data: {
          f19: total[0],
          f20: total[1],
          m19: total[2],
          m20: total[3],
        },
      })
    )
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error,
    })
  }
}
