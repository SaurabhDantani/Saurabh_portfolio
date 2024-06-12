import Head from "next/head";
import Image from "next/image";

export default function Headerxx() {
  return (
    <>
      <Head>
        <title>Arceelus</title>
        <meta
          name="description"
          content="Shaping a world with reimagination."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white dark:bg-gray-900">
        <header>
          <nav className="fixed z-10 w-full dark:bg-gray-900 bg-white md:absolute md:bg-transparent">
            <div className="container m-auto px-2 md:px-12 lg:px-7">
              <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
                <input
                  type="checkbox"
                  name="toggle_nav"
                  id="toggle_nav"
                  className="hidden peer"
                />
                <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                  <a
                    href="#"
                    aria-label="logo"
                    className="flex space-x-2 items-center"
                  >
                    <div aria-hidden="true" className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                      <div className="h-6 w-2 bg-teal-500"></div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      Arceelus
                    </span>
                  </a>

                  <div className="flex items-center lg:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggle_nav"
                      aria-label="hamburger"
                      id="hamburger"
                      className="relative  p-6 -mr-6"
                    >
                      <div
                        aria-hidden="true"
                        id="line"
                        className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                    </label>
                  </div>
                </div>

                <div
                  className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full 
                    lg:flex lg:flex-row flex-col 
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl 
                    bg-white dark:bg-gray-900 lg:gap-0 
                    lg:p-0  
                    lg:bg-transparent lg:w-7/12"
                >
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                    <ul
                      className=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0"
                    >
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-teal-700"
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-teal-700"
                        >
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-teal-700"
                        >
                          <span>Services</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full lg:pl-2 space-y-2 border-teal-200 lg:w-auto lg:space-y-0 sm:w-max lg:border-l">
                    <button
                      type="button"
                      title="Start buying"
                      className="w-full py-3 px-6 text-center rounded-full transition dark:active:bg-teal-900 dark:focus:bg-gray-800 active:bg-teal-200 focus:bg-teal-100 sm:w-max"
                    >
                      <span className="block text-teal-800 dark:text-teal-300 font-semibold text-sm">
                        Sign up
                      </span>
                    </button>
                    <button
                      type="button"
                      title="Start buying"
                      className="w-full py-3 px-6 text-center rounded-full transition bg-teal-300 hover:bg-teal-100 active:bg-teal-400 focus:bg-teal-300 sm:w-max"
                    >
                      <span className="block text-teal-900 font-semibold text-sm">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div>
          <div className="absolute w-full object-cover object-left-top h-screen inset-0 top-0 hidden dark:block">
            <Image
              src="/images/bg.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="absolute w-full object-cover object-top h-screen inset-0 top-0 dark:hidden">
            <Image
              src="/images/bg2.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative container m-auto px-6 md:px-12 lg:px-7">
            <div className="py-40 lg:py-56 md:w-9/12 lg:w-7/12 dark:lg:w-6/12 ml-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
                Shaping a world with{" "}
                <span className="text-teal-600 dark:text-teal-500">
                  reimagination.
                </span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                incidunt nam itaque sed eius modi error totam sit illum.
                Voluptas doloribus asperiores quaerat aperiam. Quidem harum
                omnis beatae ipsum soluta!
              </p>
              <div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-teal-300 hover:bg-teal-100 active:bg-teal-400 focus:bg-teal-300 sm:w-max"
                >
                  <span className="block text-teal-900 font-semibold text-sm">
                    Contact Us
                  </span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:active:bg-teal-900 dark:focus:bg-gray-800 active:bg-teal-200 focus:bg-teal-100 sm:w-max"
                >
                  <span className="block text-teal-800 dark:text-teal-100 font-semibold text-sm">
                    About us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
