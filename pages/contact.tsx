import ContactUs from '../components/landing/contactus/ContactUs';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl bg-gray-500 text-gray-400 w-full">
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
