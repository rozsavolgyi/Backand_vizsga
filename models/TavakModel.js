const mongoose = require("mongoose");
const ToSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
    default: "no-photo.jpg",
  },
  location: {
    type: String
  },
  coordinates:{
    type: [Number]
  },
  description:{
    type:String
  },
  typical_fish: {
    type: [String],
    required: true,
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