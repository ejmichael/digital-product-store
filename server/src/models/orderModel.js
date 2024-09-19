const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
// streetAddress: {
//   type: String,
//   required: true
// },
// city:{
//   type: String,
//   required: true
// },
// postCode:{
//   type: String,
//   required: true
// },
orderRef: {
  type: String,
  required: true
},
  products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['placed', 'completed', 'canceled'],
    default: 'placed'
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
