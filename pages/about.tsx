import About from '../components/landing/about/About';
import Recognition from '../components/landing/recognition/Recognition';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl bg-white w-full">
          <Recognition />
        </div>
      </div>
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl bg-gray-100 w-full">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
