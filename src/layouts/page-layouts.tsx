import { classNames } from "../utils/helper";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [{ name: "Github Users", href: "#", current: true }];

export interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-indigo-600 shadow-md fixed top-0 w-full overflow-hidden z-50"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-500 text-white"
                                : "text-gray-300 hover:bg-indigo-500 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-5000 text-white"
                          : "text-gray-300 hover:bg-indigo-500 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 md:my-10">
            {children}
          </div>
        </main>
      </div>
      <footer className="flex flex-col items-center py-8 my-16 text-2xs text-center text-neutral-400 mt-10 mx-8">
        <p className="mb-2">
          Made using React.js and Tailwind CSS. Hosted on Vercel.
        </p>
        <p>
          <a
            className="hover:text-neutral-300 underline"
            href="https://github.com/Zainal21"
          >
            MIT License
          </a>{" "}
          &copy; {new Date().getFullYear()} <strong>Muhamadzain.tsx</strong>.
        </p>
      </footer>
    </>
  );
};

export default PageLayout;
