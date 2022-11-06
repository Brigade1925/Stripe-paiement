import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { activate } from '../../../i18n';

export interface IMyHeadlessDropDown {}

interface Language {
  id: string;
  name: string;
  avatar: string;
}

const languages: Language[] = [
  {
    id: 'en',
    name: 'EN',
    avatar: '/assets/icons/flags/gb.svg',
  },
  {
    id: 'ar',
    name: 'TN',
    avatar: '/assets/icons/flags/tn.svg',
  },
  {
    id: 'de',
    name: 'DE',
    avatar: '/assets/icons/flags/de.svg',
  },
  {
    id: 'fr',
    name: 'FR',
    avatar: '/assets/icons/flags/fr.svg',
  },
];

function getIndex(languages: Language[], locale: string) {
  for (var i = 0; i < languages.length; i++) {
    if (languages[i].id === locale) return i;
  }
  return -1;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MyHeadlessDropDown: React.FC<IMyHeadlessDropDown> = () => {
  const router = useRouter();
  const locale: string = router.locale!;

  const [selected, setSelected] = useState(
    languages[getIndex(languages, locale)]
  );

  const changeLanguage = (loc: string) => {
    const locale = loc;
    activate(locale);
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative align-middle m-auto">
            <Listbox.Button
              className="relative w-full rounded-md p-2 text-left shadow-sm cursor-pointer
             focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            >
              <span className="flex items-center">
                <Image
                  src={selected.avatar}
                  alt=""
                  height="32px"
                  width="32px"
                  className="flex-shrink-0"
                />
                {/* <span className="ml-1 block truncate">{selected.name}</span> */}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    onClick={() => changeLanguage(person.id)}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-red-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center h-6 w-9">
                          <Image
                            src={person.avatar}
                            alt=""
                            height={26}
                            width={26}
                            className="flex-shrink-0"
                          />
                          {/* <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.name}
                          </span> */}
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-red-600',
                              'absolute inset-y-0 right-0 flex items-center pr-1'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default MyHeadlessDropDown;
