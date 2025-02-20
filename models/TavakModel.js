const mongoose = require("mongoose");
const ToSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters!"],
  },
  img: {
    type: String,
    default: "no-photo.jpg",
  },
  location: {
    type: String
  },
  typical_fish: {
    type: String
  },
  water_depth: {
    type: [String],
    required: true,
    enum: [
      'ponty',
      'harcsa',
      'csuka',
      'keszeg',
      'süllő',
      'amur',
      'compó',
      'afrikai harcsa',
      'busa',
      'jász',
      'paduc'
    ]
  },
  water_depth: {
    type: Number
  },
  steg_number: {
    type: Number
  },
  day_ticket: {
    type: [String],
    type: {
      type: String,
      enum: [
        "felnőtt",
        "gyermek",
        "éjszakai",
        "diák",
        "családi"
      ]
    },
    price: {
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

module.exports = mongoose.model("TavakModel", ToSchema, "lake");