const mongoose = require("mongoose");
const ToSchema = new mongoose.Schema({
  Nev: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters!"],
  },
  Kep: {
    type: String,
    default: "no-photo.jpg",
  },
  Elhelyezkedes: {
    type: String
  },
  leiras: {
    type: String
  },
  jellemzo_halfajok: {
    type: [String],
    required: true,
    enum: [
      'ponty',
      'harcsa',
      'csuka',
      'keszeg',
      'süllő',
      'amur'
    ]
  },
  vizmelyeg: {
    type: Number
  },
  stegek_szama: {
    type: Number
  },
  napijegyek: {
    type: [String],
    tipus: {
      type: String,
      enum: [
        "felnőtt",
        "gyermek",
        "éjszakai",
        "diák",
        "családi"
      ]
    },
    ar: {
      type: Number
    }
  }
},
)

// ToSchema.pre('remove', async function (next) {
//   console.log(`lakes being removed from bootcamp ${this._id}`);
//   await this.model('FogasokModel').deleteMany({ tavak: this._id })
//   next()
// })

module.exports = mongoose.model("TavakModel", ToSchema, "tavak");