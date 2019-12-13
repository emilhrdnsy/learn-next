const mongoose = require('mongoose')
const Schema = mongoose.Schema

let inbox = new Schema({
  nomor_surat: {
    type: Number
  },
  nama: {
    type: String
  },
})

module.exports = mongoose.model('inboxs', inbox)