import Compaign from '../components/landing/compaign/Compaign';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl bg-white w-full">
          <Compaign />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
