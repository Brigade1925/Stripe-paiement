import HeroVideo from '../components/landing/herovideo/HeroVideo';
import Stats from '../components/landing/stats/Stats';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl text-gray-400 w-full">
          <HeroVideo videoUrl={'assets/videos/lemma_2.mp4'} />
        </div>
      </div>

      <div className="mx-auto w-full">
        <div className="flex items-center justify-center rounded-xl bg-gray-100 w-full">
          <Stats />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
