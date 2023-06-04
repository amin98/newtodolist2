const mongoose = require('mongoose');
const slugify = require('slugify');

// mongoose.connect('mongodb://localhost/tasklist');

// mongoose.connect(
//   'mongodb+srv://amin131199:pV3e6XxWOr38djb6@clustertasklist.i2xic4x.mongodb.net/?retryWrites=true&w=majority'
// );

const uri =
  'mongodb://amin131199:pV3e6XxWOr38djb6@ac-j7qv6ul-shard-00-00.i2xic4x.mongodb.net:27017,ac-j7qv6ul-shard-00-01.i2xic4x.mongodb.net:27017,ac-j7qv6ul-shard-00-02.i2xic4x.mongodb.net:27017/?ssl=true&replicaSet=atlas-6fhp5l-shard-0&authSource=admin&retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('connected to mongodb');
  } catch (e) {
    console.error(e);
  }
}

connect();

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: Number,
    required: true,
  },
  duedate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

taskSchema.pre('validate', function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

// taskSchema.pre('validate', function (next) {
//   if (this.name) {
//     this.slug = slugify(this.name, { lower: true, strict: true });
//   }

//   next();
// });

module.exports = mongoose.model('Task', taskSchema);
