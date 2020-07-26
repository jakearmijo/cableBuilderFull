'use strict'

const db = require('../server/db')
const chalk = require('chalk')
const {User} = require('../server/db/models')
const {Cable} = require('../server/db/models')

const cables = [
  {
    id: 1,
    name: 'TH1-XX',
    cableType: 'Tour Hard',
    jacketColor: '',
    description:
      'Tour Hard Series Straight to Straight Low-Noise 18 AWG Oxygen Free Instrument Cable using one Straight Neutrik Silent Plug.',
    price: 29.0,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/xctmpfByzWl.png'
  },
  {
    id: 2,
    name: 'TH1N-XX',
    cableType: 'Tour Hard',
    jacketColor: '',
    description:
      'Straight to Straight Low-Noise 18 AWG Oxygen Free Instrument Cable with Nickel Neutrik plugs',
    price: 19.99,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/xctmpNRPUXi.png'
  },
  {
    id: 3,
    name: 'TH1SC-XX',
    cableType: 'Tour Hard',
    jacketColor: '',
    description:
      'Straight to Straight Low-Noise 18 AWG Oxygen Free Instrument Cable with Switchcraft plugs',
    price: 17.8,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/xctmppgjdGk.png'
  },
  {
    id: 4,
    name: 'GI1-XX',
    cableType: 'Standard',
    jacketColor: '',
    description:
      'Straight to Straight Low-Noise Single Conductor Instrument Cable using CA-0393',
    price: 18.95,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/gi1xxmiva.jpg'
  },
  {
    id: 5,
    name: 'GI2-XX',
    cableType: 'Standard',
    jacketColor: '',
    description:
      'Straight to Straight Low-Noise Single Conductor Instrument Cable with Extra Strain Relief & Loctite using CA-0393',
    price: 20.95,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/gi2-xx200.jpg'
  },
  {
    id: 6,
    name: 'GI3-XX',
    cableType: 'Standard',
    jacketColor: '',
    description:
      'Straight to Right Angle Low-Noise Single Conductor Instrument Cable using CA-0393',
    price: 19.75,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/gi3-xx200.jpg'
  },
  {
    id: 7,
    name: 'GI4-XX',
    cableType: 'Standard',
    jacketColor: '',
    description:
      'Right Angle to Right Angle Low-Noise Single Conductor Instrument Cable using CA-0393',
    price: 21.4,
    imageUrl: 'https://btpa.com/var/images/product/366.440/T/gi4-xx125.jpg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log(chalk.cyan('db synced!'))

  await Cable.bulkCreate(cables)
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(chalk.yellowBright(`seeded ${users.length} users`))
  console.log(chalk.yellowBright(`seeded ${cables.length} cables`))
  console.log(chalk.greenBright(`seeded successfully`))
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log(chalk.redBright('seeding...'))
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log(chalk.redBright('closing db connection'))
    await db.close()
    console.log(chalk.redBright('db connection closed'))
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
