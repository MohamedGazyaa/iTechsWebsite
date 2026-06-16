'use client';

import { useState } from 'react';

export default function SubscribeForm({ emailLabel, emailPlaceholder, subscribeButton }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    await res.json();

    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('idle');
    }
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
          required
          disabled={status === 'loading' || status === 'success'}
          className="w-full rounded-full bg-white ps-4 pe-36 py-2.5 text-gray-700 placeholder-gray-400 outline-none text-sm disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute inset-e-0 top-1/2 -translate-y-1/2 px-5 py-2 bg-white border-[6px] border-itechsBlue text-itechsBlue font-bold text-sm rounded-full whitespace-nowrap cursor-pointer hover:bg-itechsSkyBlue transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? '...' : subscribeButton}
        </button>
      </div>
    </form>
  );
}
