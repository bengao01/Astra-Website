const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const ConstellationSchema = new mongoose.Schema({
  name: String,
  creator: ObjectId, // reference googleid
  sky_id: String,
  edges: Array,
});

// compile model from schema
module.exports = mongoose.model("constellation", ConstellationSchema);
