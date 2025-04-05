import React from "react";

function Shipping() {
  return (
    <section className="flex flex-col text-slate-700">
      <div className="flex flex-col justify-center md:flex-row md:justify-between mx-16 lg:mx-32 xl:mx-64 py-8 gap-8">
        <div className="flex items-center justify-center gap-6 max-w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-truck border-3 border-dashed border-emerald-400 rounded-full p-3 w-20 h-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
          </svg>
          <div className="flex flex-col max-w-xs gap-3">
            <h1 className="font-semibold text-lg">Free Shipping</h1>
            <p>
              Shopping Over $59 or first purchase you will get 100% free
              shipping
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 max-w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-wallet border-3 border-dashed border-emerald-400 rounded-full p-3 w-20 h-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
          </svg>
          <div className="flex flex-col max-w-xs gap-3 ">
            <h1 className="font-semibold text-lg">30 Days Return policy</h1>
            <p>
              Faces any problem with our product? don’t worry we will refund.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 max-w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-headset border-3 border-dashed border-emerald-400 rounded-full p-3 w-20 h-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
            <path d="M18 19c0 1.657 -2.686 3 -6 3" />
            <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
            <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
          </svg>
          <div className="flex flex-col max-w-xs gap-3">
            <h1 className="font-semibold text-lg">24/7 Coustomer Support</h1>
            <p>Our dedicated support engneer are waiting for assist you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shipping;
