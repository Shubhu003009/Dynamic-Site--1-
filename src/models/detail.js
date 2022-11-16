const mongoose = require('mongoose');
const Detail = mongoose.Schema({
  brandName: String,
  brandIconUrl: String,
  details: String,
  links: [
    {
      label: String,
      url: String,
      details: String,
    },
  ],
});

module.exports = mongoose.model('detail', Detail);
