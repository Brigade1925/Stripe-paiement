// import { Session } from 'next-auth';
// import { SessionContextValue, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
// import AuthButton from '../../buttons/auth/AuthButton';

export interface INavigationBar
  extends React.ComponentPropsWithoutRef<'header'> {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavigationBar: React.FC<INavigationBar> = ({
  className,
  ...headerProps
}) => {
  let navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Activities', href: '/activities', current: false },
    { name: 'Contact', href: '/contact', current: false },
    //{ name: 'Pricing', href: '/#pricing', current: router.pathname == "/#pricing" ? true : false },
  ];
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row align-middle items-center justify-between shadow-sm border-b sticky bg-slate-50 top-0 z-50 min-h-[64px] py-2 ${className}`}
    >
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 container xl:max-w-7xl mx-auto px-2 lg:px-10">
        {/* <!-- Logo --> */}
        <div>
          <Link href="/">
            <a
              href=""
              className="inline-flex items-center space-x-0 font-bold text-lg tracking-wide text-red-900 hover:text-red-800 c-nav-Btn"
            >
              <div className="flex flex-row align-middle">
                <Image
                  src="/assets/imgs/logo/logo.png"
                  alt="card__image"
                  className=""
                  width="60"
                  height="60"
                />
              </div>

              <div className="flex flex-col align-middle space-y-[-10px] font-bebas text-gray-800 text-left">
                <span className="hidden xs:inline">Etoilistes</span>
                <span className="hidden xs:inline">Everywhere</span>
              </div>
            </a>
          </Link>
        </div>
        {/* <!-- END Logo --> */}

        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-10">
          {/* <!-- Navigation --> */}
          <nav className="text-sm md:text-base space-x-1 md:space-x-6">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  key={item.name}
                  className={classNames(
                    item.current
                      ? 'bg-red-800 text-white'
                      : 'text-gray-500 hover:bg-red-700 hover:text-white',
                    'px-2 py-2 rounded-md text-sm font-medium'
                  )}
                >
                  <span>{item.name}</span>
                </a>
              </Link>
            ))}
          </nav>
          {/* <!-- END Navigation --> */}

          {/* <!-- Actions --> */}
        </div>
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-10">
          <div className="flex items-center justify-center space-x-2">
            <a
              href="javascript:void(0)"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Join Us</span>
            </a>
          </div>
        </div>
        {/* <!-- END Actions --> */}
      </div>
    </header>
  );
};

export default NavigationBar;
