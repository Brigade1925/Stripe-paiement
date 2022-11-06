import { Menu, Transition } from '@headlessui/react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import AuthButton from '../../buttons/auth/AuthButton';

export interface IUserMenuDropDown {
  session: Session;
}

const UserMenuDropDown: React.FC<IUserMenuDropDown> = ({ session }) => {
  return (
    <>
      <div className="flex items-center justify-end">
        <Menu as="div" className="relative">
          <div>
            <Menu.Button
              className="relative w-full cursor-default rounded-full border border-gray-300 bg-white py-2 pl-3 pr-7 text-left shadow-sm
             focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            >
              <span className="flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={session?.user?.image!}
                  alt=""
                  height={40}
                  width={40}
                />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <Cog6ToothIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          {session && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <Menu.Item>
                  <div className="p-2 space-y-1">
                    <Link href="/etoiliste">
                      <a
                        role="menuitem"
                        className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                      >
                        <svg
                          className="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Profile</span>
                      </a>
                    </Link>
                    <Link href={''}>
                      <a
                        role="menuitem"
                        className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                      >
                        <svg
                          className="hi-solid hi-inbox inline-block w-5 h-5 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Inbox</span>
                      </a>
                    </Link>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="p-2 space-y-1">
                    <Link href={''}>
                      <a
                        role="menuitem"
                        href="javascript:void(0)"
                        className="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                      >
                        <svg
                          className="hi-solid hi-cog inline-block w-5 h-5 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Settings</span>
                      </a>
                    </Link>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="p-2 space-y-1 px-2">
                    <form onSubmit={() => console.log()} className="border-t-2">
                      <button
                        type="submit"
                        role="menuitem"
                        className="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                      >
                        <svg
                          className="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <AuthButton className="w-full text-left flex items-center space-x-2 rounded text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700" />
                      </button>
                    </form>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          )}
        </Menu>
      </div>
    </>
  );
};

export default UserMenuDropDown;
