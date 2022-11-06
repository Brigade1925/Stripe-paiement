import Services from '../components/landing/services/Services';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto w-full mt-8 sm:mt-16">
        <div className="flex items-center justify-center rounded-xl bg-gray-100 w-full">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
