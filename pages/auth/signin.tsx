import { AppProviders } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

function signin(data: { providers: AppProviders; referer: String }) {
  let { providers } = data;
  return (
    <div className="flex flex-col content-center items-center justify-center h-screen bg-[url('/assets/imgs/signIn/sousse-stadium.jpg')] bg-cover bg-center">
      <div className="min-h-full flex items-center justify-center content-center py-12 px-4 sm:px-6 sm:py-5 lg:px-8 ">
        <div className="max-w-md w-full space-y-2 bg-white shadow-sm p-1 rounded-md">
          <div>
            <div className="relative mx-auto h-36 w-auto">
              <Image
                src="/assets/imgs/signIn/logo-desktop.jpg"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="p-4 m-4">
              <h2 className="mt-2 font-glory text-center text-2xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:text-indigo-500"
                >
                  #آقف لجمعيتك#
                </a>
              </p>
            </div>
            <div className="m-4 space-y-6">
              <div>
                {Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      {/* <LockClosedIcon
                      className="h-5 w-5 text-blue-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    /> */}
                    </span>
                    Sign in with {provider.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const referer = context?.query?.referer ? context?.query?.referer : '';

  return {
    props: {
      providers,
      referer,
    },
  };
}

export default signin;
