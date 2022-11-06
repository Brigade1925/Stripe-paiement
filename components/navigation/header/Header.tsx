import { Session } from 'next-auth';
import { SessionContextValue, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthButton from '../../buttons/auth/AuthButton';
import MyHeadlessDropDown from '../../dropdown/base/MyHeadlessDropDown';
import UserMenuDropDown from '../../dropdown/menu/UserMenuDropDown';
// import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  //const { data: session, status } = useSession();
  //const { data:session, status}:SessionContextValue|null = useSession();
  const data: SessionContextValue = useSession();

  const session: Session = data?.data!;

  // const loading = data.status === 'loading';
  const router = useRouter();
  let navigation = [
    { name: 'Home', href: '/', current: router.pathname == '/' ? true : false },
    {
      name: 'About',
      href: '/about',
      current: router.pathname == '/about' ? true : false,
    },
    {
      name: 'Services',
      href: '/services',
      current: router.pathname == '/services' ? true : false,
    },
    {
      name: 'Activities',
      href: '/activities',
      current: router.pathname == '/activities' ? true : false,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: router.pathname == '/contact' ? true : false,
    },
    {
      name: 'Donation',
      href: '/Donation',
      current: router.pathname == '/Donation' ? true : false,
    },
    //{ name: 'Pricing', href: '/#pricing', current: router.pathname == "/#pricing" ? true : false },
  ];

  return (
    <header
      {...headerProps}
      className={`w-full flex-col align-middle items-center justify-between shadow-md border-b border-gray-300 sticky bg-slate-50 top-0 z-50 ${className}`}
    >
      <div className="relative flex flex-row w-full max-w-7xl align-middle items-center justify-between mx-auto">
        <div className="flex-1 flex absolute space-x-5 m-1 align-middle left-0">
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

              <div className="flex flex-col align-middle space-y-[-10px] font-bebas text-gray-800">
                <span className="hidden sm:inline">Etoilistes</span>
                <span className="hidden sm:inline">Everywhere</span>
              </div>
            </a>
          </Link>
        </div>

        <div className="space-x-5 m-1 flex-1 flex items-center justify-center sm:justify-center align-middle">
          <Link href="/">
            <a
              href="https://etoile-du-sahel.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide c-nav-Btn"
            >
              <div className="flex flex-row align-middle">
                <Image
                  src="/assets/imgs/logo/ess-logo.png"
                  alt="card__image"
                  className=""
                  width="64"
                  height="64"
                />
              </div>
            </a>
          </Link>
        </div>

        <div className="flex-1 flex-col absolute inline-flex m-1 align-middle right-0 items-center">
          <div className="flex align-middle">
            <MyHeadlessDropDown />
            {!session ? (
              <AuthButton className="border-1 p-2 px-4 bg-red-800 rounded text-white ml-2" />
            ) : (
              <UserMenuDropDown session={session} />
            )}
            {/* <p
              className={`nojs-show ${
                !session && loading ? 'styles.loading' : 'styles.loaded'
              }`}
            >
              {!session && (
                <>
                  <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white">
                    Sign In
                  </button>
                  <a
                    href={`/api/auth/signin`}
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    Sign in
                  </a>
                </>
              )}
              {session?.user && (
                <>
                  {session.user.image && (
                    <span
                      style={{
                        backgroundImage: `url('${session.user.image}')`,
                      }}
                      className=""
                    />
                  )}
                  <span className="truncate max-w-fit bg-slate-700">
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.email ?? session.user.name}</strong>
                  </span>
                  <a
                    href={`/api/auth/signout`}
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </a>
                </>
              )}
            </p> */}
          </div>
        </div>
      </div>

      {!session?.user && (
        <div className="relative flex flex-row w-full align-middle items-center justify-between mx-auto bg-gray-200 ">
          <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 mx-auto py-3 ">
            {/* <!-- Navigation --> */}
            <nav className="text-sm md:text-base space-x-4 md:space-x-6 font-glory font-extrabold">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    key={item.name}
                    className={classNames(
                      item.current
                        ? 'hover:bg-gray-200 text-red-900'
                        : 'text-gray-900  hover:text-red-700',
                      'px-2 py-2 rounded-md text-base sm:text-xl font-extrabold'
                    )}
                  >
                    <span>{item.name}</span>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
