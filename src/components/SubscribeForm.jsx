'use client';

import { useState } from 'react';

export default function SubscribeForm({ emailLabel, emailPlaceholder, subscribeButton }) {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Backend integration will be added later
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 w-full sm:w-80">
      <label htmlFor="footer-email" className="text-white text-sm ms-5">
        {emailLabel}
      </label>
      <div className="relative">
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
          className="w-full rounded-full bg-white ps-4 pe-36 py-2.5 text-gray-700 placeholder-gray-400 outline-none text-sm"
        />
        <button
          type="submit"
          className="absolute inset-e-0 top-1/2 -translate-y-1/2 px-5 py-2 bg-white border-[6px] border-itechsBlue text-itechsBlue font-bold text-sm rounded-full whitespace-nowrap cursor-pointer hover:bg-itechsSkyBlue transition-colors"
        >
          {subscribeButton}
        </button>
      </div>
    </form>
  );
}
