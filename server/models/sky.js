const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const SkySchema = new mongoose.Schema({
  name: String,
  ObjectId: String, // reference googleid
  sky_id: String,
});

// compile model from schema
module.exports = mongoose.model("sky", SkySchema);
