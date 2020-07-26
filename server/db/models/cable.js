const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Cable = db.define('cable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cableType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  jacketColor: {
    type: Sequelize.STRING,
    validate: {
      isIn: [
        [
          'black',
          'sea foam green',
          'purple',
          'orange',
          'red',
          'blue',
          'grey',
          'white'
        ]
      ]
    },
    defaultValue: 'black'
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'Fmlogo2.png'
  }
})

module.exports = Cable
