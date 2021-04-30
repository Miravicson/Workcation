import React from "react";

import popularDestinations from "./data/popularDestinations";
import DestinationList from "./components/DestinationList";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <div className="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/img/logo-brand.svg" alt="Workcation" />
            <img
              className="object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
              src="/img/beach-work.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl font-headline">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation{" "}
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="btn shadow-lg btn-primary hover:-translate-y-0.5 transform transition"
                href="#"
              >
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
      <div className="max-w-md px-8 pt-24 pb-32 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3">
          <DestinationList data={popularDestinations} />
        </div>
      </div>
      {/* <div className="bg-white lg:grid lg:grid-cols-5 h-100">
        <div className="opacity-50 lg:col-span-3 bg-brand-light">Image</div>
        <div className="lg:col-span-2">
          <Login/>
        </div>
      </div> */}
    </div>
  );
}

export default App;
