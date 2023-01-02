const mongoose = require("mongoose");

//crear conexion de plataformas
const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["public", "private"],
    },
    poster: {
      type: Object,
      url: { type: String, required: true },
      public_id: { type: String, required: true },
      responsive: [URL],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Platform", movieSchema);
