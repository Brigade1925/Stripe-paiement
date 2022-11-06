import { model, models, Schema } from 'mongoose';

export default models.User ||
  model(
    'User',
    new Schema(
      {
        username: { type: String, required: true, unique: true },
        firstname: { type: String },
        lastname: { type: String },
        email: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false },
        isActive: { type: Boolean, default: false },
        stripeId: { type: String, unique: true },
        refererId: { type: Schema.Types.ObjectId, default: null },
        phone: { type: String },
        country: { type: String },
        city: { type: String },
        street: { type: String },
        zipcode: { type: String },
        image: { type: String },
        gender: { type: String },
        birthdate: { type: String },
        jobTitle: { type: String },
      },
      { collection: 'users' }
    )
  );
