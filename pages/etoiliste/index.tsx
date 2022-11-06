import { getSession, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import Referrals from '../../components/etoiliste/referrals/Referrals';
import Stats from '../../components/etoiliste/stats/Stats';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import dbConnect from '../../lib/dbConnect';
import userModel from '../../models/user.model';
import { IUser } from '../../types';

import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout<{ referalList: IUser[] }> = ({
  referalList,
}) => {
  const data = useSession();

  console.log('------------');
  console.log(referalList);
  console.log('------------');

  return (
    <div
      id="page-container"
      className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
    >
      {/* <!-- Page Content --> */}
      <main id="page-content" className="flex flex-auto flex-col max-w-full">
        {/* <!-- Page Heading --> */}
        <div className="bg-gray-50">
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-1 lg:py-0 space-y-1 sm:space-y-0 space-x-1">
              <div className="grow">
                {/* <h1 className="text-xl font-bold text-gray-700 mb-1">Home</h1> */}
                <h2 className="text-sm text-gray-500 font-medium">
                  Welcome{' '}
                  <a
                    href="javascript:void(0)"
                    className="text-red-600 hover:text-red-400"
                  >
                    {' '}
                  </a>
                  in your home page, remember to invite your friends
                </h2>
              </div>
              <div className="space-y-1 grow">
                <div className="relative">
                  <input
                    className="block border bg-slate-200 text-sm text-clip border-gray-200 rounded pr-3 p-2 leading-6 w-full focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    type="text"
                    id="mixed2"
                    name="mixed2"
                    placeholder="example.com"
                    disabled
                    value={
                      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F&referer=` +
                      data.data?.user?.email
                    }
                  />
                </div>
              </div>
              <div className="flex-none flex items-center justify-center sm:justify-end space-x-2 py-1 rounded sm:bg-transparent px-2 sm:px-0">
                <a
                  href="javascript:void(0)"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 
                  text-sm rounded border-red-700 bg-red-700 text-white hover:text-white hover:bg-red-800 hover:border-red-800 
                  focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-700 active:border-red-700"
                  onClick={() => {
                    toast.success('Invitation link has been coppied', {
                      position: 'bottom-center',
                      autoClose: 2000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F&referer=` +
                        data.data?.user?.email
                    );
                  }}
                >
                  <svg
                    className="hi-solid hi-clipboard-copy inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  <span>Copy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END Page Heading --> */}

        {/* <!-- Page Section --> */}
        <div className="container max-w-full xl:max-w-7xl mx-auto p-4 lg:p-8">
          {/* <!-- Placeholder --> */}
          <div className="flex flex-col w-full items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-5 mx-0">
            <div className="w-full p-4 sm:p-12">
              <Stats Stats={[]} />
            </div>
            <div className="w-full p-4 sm:p-12">
              <Referrals referrals={referalList} />
            </div>
          </div>
        </div>
        {/* <!-- END Page Section --> */}
      </main>
      {/* <!-- END Page Content --> */}
    </div>
    // <!-- END Page Container -->;
  );
};

export async function getServerSideProps(context: any) {
  let foundList: IUser[] = [];

  try {
    let session = await getSession(context);
    await dbConnect();

    foundList = await userModel.find({ refererId: session?.user?.id });
    console.log('  __**__ ');
    console.log(foundList);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      referalList: JSON.parse(JSON.stringify(foundList)),
    },
  };
}

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout id="page-container">{page}</PrimaryLayout>;
};
