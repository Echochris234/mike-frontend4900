const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('./post');
const Follow = require('./follower');
const Comment = require('./comment');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id.toString() }, 'hello');
    this.tokens = this.tokens.concat({ token });
    await this.save();
  } catch (error) {
    throw error;
  }
};

userSchema.statics.findByEmail = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw 'No User was found';

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw 'Wrong Password';

    return user;
  } catch (error) {
    throw error;
  }
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    if (this.password !== this.confirmPassword) {
      throw `Passwords don't match`;
    }
    this.password = await bcrypt.hash(this.password, 8);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 8);
  }

  next();
});

userSchema.pre('remove', async function (next) {
  try {
    await Post.deleteMany({ author: this._id });
    await Follow.deleteMany({ follower: this._id });
    await Follow.deleteMany({ following: this._id });
    await Comment.deleteMany({ author: this._id });
    next();
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.confirmPassword;
  delete user.tokens;
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
