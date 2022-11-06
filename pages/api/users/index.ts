import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/user.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //export default async (req, res) => {

  await dbConnect();
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id);

        console.log('-- GET --');
        console.log(id);
        console.log(user);

        if (!user) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        console.log('-- PUT --');
        console.log(req.body);
        console.log(user);
        if (!user) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedUser = await User.deleteOne({ _id: id });

        if (!deletedUser) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
