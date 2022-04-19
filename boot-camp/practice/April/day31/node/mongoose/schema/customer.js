const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

// 만약 모델명 Customer과 몽고 DB의 콜렉션명이 customers 이면 알아서 연결됨
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
