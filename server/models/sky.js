const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const SkySchema = new mongoose.Schema({
  name: String,
  creator: ObjectId,
  sky_id: String,
});

// compile model from schema
module.exports = mongoose.model("sky", SkySchema);
