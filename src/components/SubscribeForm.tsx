"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="subscribe-input"
          placeholder="your@email.com"
          required
          disabled={submitted}
        />
        <button type="submit" className="subscribe-btn" disabled={submitted}>
          {submitted ? "Subscribed" : "Subscribe"}
        </button>
      </form>
      <div className="subscribe-note">Free. Weekly. Unsubscribe anytime.</div>
    </>
  );
}
