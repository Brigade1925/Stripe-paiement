import { Schema } from 'mongoose';

export interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  image: string;
  refererId: Schema.Types.ObjectId;
  username: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  isActive: boolean;
  stripeId: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  zipcode: string;
  gender: string;
  birthdate: string;
  jobTitle: string;
}
