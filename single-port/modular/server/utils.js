'use strict'

async function example1 () {
  return 'example 1'
}

async function example2 () {
  return 'example 2'
}

// module.exports = { example1, example2 }
// or:
export { example1, example2 }

// Or:
// https://stackoverflow.com/questions/45781063/nodejs-how-group-and-export-multiple-functions-in-a-separate-file
// export const example1 = async () => {
//    return 'example 1'
// }

// export const example2 = async () => {
//    return 'example 2'
// }

// Or:
// export default {
//   async example1 () {
//     return 'example 1'
//   },
//   async example2 () {
//     return 'example 2'
//   }
// }
