import Aos from 'aos';
import 'aos/dist/aos.css';
import { ObjectId } from 'mongodb';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import dbConnect from '../../lib/dbConnect';
import User from '../../models/user.model';
import { IUser } from '../../types';

function newUser(data: { referer: IUser }) {
  let { referer } = data;

  Aos.init({
    easing: 'ease-out-cubic',
    delay: 300,
    duration: 1000,
    offset: 500,
  });

  return (
    <div className="bg-cover bg-bottom bg-[url('/assets/imgs/signIn/sousse-stadium.jpg')] min-h-screen items-center bg-fixed">
      <div className="bg-gradient-to-r from-gray-500/40 via-red-800/40 to-gray-500/40  backdrop-filter backdrop-blur-sm min-h-screen flex justify-center items-center text-white text-center flex-col pt-20">
        {/* Header */}
        <div className="text-center justify-center items-center mt-30 mb-20 py-10">
          <img
            data-aos="fade-right"
            src="/assets/imgs/logo/logo.png"
            alt="Logo"
            className="inline-block w-40 h-auto mt-3"
          />
          <img
            data-aos="fade-left"
            src="/assets/imgs/logo/ess-logo.png"
            alt="Ess Logo"
            className="inline-block w-48 h-auto -ml-20"
          />
        </div>

        {/* -----   content   ----- */}
        <div className="text-center justify-center items-center mt-30 mb-20">
          <div
            data-aos="zoom-out-up"
            data-aos-delay="600"
            className="flex-col text-center justify-center items-center mx-auto h-36 w-64 mt-5"
          >
            <Image
              src="/assets/imgs/welcome_new_user/bouha-ess.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="850" className="w-80">
            <p>
              أهل بولد جمعيتي، مرحبا بيك خويا في عايلتك في الغربة
              <span className="font-bold text-red-300">
                {' '}
                سواحلية في كل مكان
              </span>
              <br></br>
              <span className="font-bold text-red-300">
                (Etoilistes Everywhere)
              </span>
              <br />
              <br />
              قبل ما تبدا حياتك معانا، حبينا نذكروك في تاريخ جمعيتك في لمحة
              صغيرة
            </p>
          </div>
        </div>

        <div data-aos="zoom-out-up" className="mt-5">
          <p>
            {referer && (
              <p>
                You have been referred by
                <span className="flex items-center">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={referer?.image}
                    alt=""
                    height={40}
                    width={40}
                  />
                </span>
              </p>
            )}
          </p>
        </div>

        {/* <!-- Timeline Container --> */}
        <div className="relative py-5 my-64">
          {/* <!-- Vertical Guide --> */}
          <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6">
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-gray-100 rounded-t"></div>
            <div className="mx-auto w-1 grow bg-gray-100"></div>
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-gray-100 rounded-b"></div>
          </div>
          {/* <!-- END Vertical Guide --> */}

          {/* <!-- Timeline --> */}
          <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto mb-5">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-right"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900 flex-col"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/tn-champian.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        بطل تونس
                      </a>{' '}
                      <span className="text-gray-600">X 10</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      1949-1950 / 1957-1958 / 1962-1963 / 1965-1966/ 1971-1972 /
                      1985-1986 / 1986-1987 / 1996-1997 / 2006-2007 / 2015-2016
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}

            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-left"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/tn-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        كأس تونس
                      </a>{' '}
                      <span className="text-gray-600">X 10</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      1959، 1963، 1974، 1975، 1981، 1983، 1996، 2012، 2014، 2015
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}

            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto mb-5">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-right"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900 flex-col"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/caf-v-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        بطل كأس أفريقيا لأبطال الكؤوس
                      </a>{' '}
                      <span className="text-gray-600">X 2</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      2003 / 1997
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}

            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-left"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/caf-sup-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        بطل كأس السوبر الأفريقي{' '}
                      </a>{' '}
                      <span className="text-gray-600">X 2</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      2008 / 1998
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}
            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto mb-5">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-right"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900 flex-col"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/caf-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        بطل كأس الكونفدرالية الافريقية{' '}
                      </a>{' '}
                      <span className="text-gray-600">X 4</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      2015 / 2006 / 1999 / 1995
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}

            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-left"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/arab-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        كأس زايد للأندية الأبطال{' '}
                      </a>{' '}
                      <span className="text-gray-600">X 1</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      2019/2018
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}
            {/* <!-- Event --> */}
            <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto mb-5">
              <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2"></div>
              </div>
              <div
                data-aos="fade-right"
                className="bg-red-50 hover:ring hover:ring-red-100 hover:ring-offset-2 rounded-xl p-4 text-red-900 flex-col"
              >
                <div className="flex relative">
                  <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-4 mt-12 sm:mt-20 ml-0 sm:ml-6 bg-gray-100 m-5"></div>
                  <img
                    data-aos="zoom-in"
                    src="/assets/imgs/welcome_new_user/cl-cup.png"
                    alt="CT"
                    className="flex-none inline-block w-12 h-auto sm:w-24 sm:h-auto"
                  />
                  <div className="grow ml-4">
                    <div className="text-sm">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold text-xl text-red-600 hover:text-red-400"
                      >
                        رابطة الأبطال الإفريقية{' '}
                      </a>{' '}
                      <span className="text-gray-600">X 1</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed mb-1">
                      2007
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- END Event --> */}
          </ul>
          {/* <!-- END Timeline --> */}
        </div>
        {/* <!-- END Timeline Container --> */}

        <div className="text-right justify-center items-center mt-10 mb-10 max-w-2xl">
          <div
            data-aos="zoom-out-up"
            className="flex-col text-center justify-center items-center mx-auto h-36 w-64 mt-5"
          >
            <Image
              src="/assets/imgs/welcome_new_user/bouha-ess.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div data-aos="zoom-in-up" className="w-full">
            <p>
              L etoile mahyech foot bark, letoile 4 fourou3, L etoile hazza 4 CL
              fi 4 fourou3
            </p>
          </div>

          <div data-aos="zoom-in-up" className="w-full">
            <p>
              letoile hia elli farhetna w lemmetna, letoile hia ettarikh wel
              hadher wel mosta9bel
            </p>
          </div>

          <div data-aos="zoom-in-up" className="w-full">
            <p>mab3adhna nraj3ou letoile lessekka shiha</p>
          </div>

          <div data-aos="zoom-in-up" className="w-full">
            <p>But mta3na nwafrou madakhil 9arra: 100 000dt kol chhar </p>
          </div>

          <div data-aos="zoom-in-up" className="w-full">
            <p>Shih montant kbir barcha, ama hmel ejma3a rich</p>
          </div>
          <div data-aos="zoom-in-up" className="w-full">
            <p>
              9addech men etoiliste mawjoud fel ghorba ? fel 3alem lkol mech ken
              fel europe kima enti jet m3ana tnejjem tjib m3ak 5 men shabek
              swahlia, w shabek yjibou shabhom ...
            </p>
          </div>
          <div data-aos="zoom-in-up" className="w-full pb-16">
            <p>
              3 500 etoilistes X 10eur par mois = 100 000 dt par mois yhellou
              mechekel jam3itna. 10 eur par mois mayjibouch hatta bakou dokhan.
            </p>
          </div>
        </div>

        <div className="m-10">
          {/* <!-- Button with Icon (extra large) --> */}
          <Link href="/etoiliste">
            <button
              type="button"
              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-6 py-4 leading-6 border-red-700 bg-red-700 text-white
             hover:text-white hover:bg-red-800 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-700 active:border-red-700"
            >
              <span>Start</span>
              <svg
                className="hi-solid hi-arrow-right inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </Link>
          {/* <!-- END Button with Icon (extra large) --> */}
        </div>

        {/* -----   end content   ----- */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let referer = context?.query?.referer ? context?.query?.referer : '';

  let foundReferer: IUser | null = null;

  if (referer)
    try {
      let session = await getSession(context);
      await dbConnect();
      let foundOne: IUser | null;
      foundOne = await User.findOneAndUpdate(
        { email: session?.user?.email },
        { $set: { refererId: new ObjectId(referer) } },
        { returnNewDocument: true }
      );

      foundReferer = await User.findById(referer);
      referer = foundOne?.refererId;
    } catch (error) {
      console.log(error);
    }

  return {
    props: {
      referer: JSON.parse(JSON.stringify(foundReferer)),
    },
  };
}

export default newUser;
