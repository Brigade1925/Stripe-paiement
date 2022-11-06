import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Admin: NextPageWithLayout = () => {
  return <h1>admin section</h1>;
};

export default Admin;

Admin.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
