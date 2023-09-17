import {  Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { usePathname, useRouter } from 'next/navigation';
type langType = {
  name: string;
  value: 'en' | 'ae';
};
const langs: langType[] = [
  { name: 'Arabic', value: 'ae' },
  { name: 'English', value: 'en' },
];

export default function Select() {
  const [selected, setSelected] = useState(langs[0]);

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const locale = path.split('/')[1];
    const currentLang = langs.find((e) => e.value === locale);
    if (currentLang) {
      setSelected(currentLang);
    }
  }, []);

  return (
    <div className='w-full bg-white'>
      <Listbox
        value={selected}
        onChange={(e: langType) => {
          const selectedLocale = e.value;
          const pathArr = path.split('/');
          pathArr[1] = selectedLocale;
          const changedPath = pathArr.join('/');
          router.push(changedPath);
          setSelected(e);
        }}
      >
        <div className='relative'>
          <Listbox.Button className='relative w-full cursor-pointer bg-white py-2 pl-4 pr-10 text-left shadow-md focus:outline-none   focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
              <i className='fas fa-chevron-down'></i>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full overflow-auto bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm'>
              {langs.map((locale, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={locale}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {locale.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

