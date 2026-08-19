"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "../site-config";

export default function Contact({ successMessage }: { successMessage: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please call or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <section id="contact" className="contact-grid" style={{ padding: "var(--space-8) 0" }}>
        <div>
          <span className="kicker">Enquire</span>
          {submitted ? (
            <p className="contact-success">{successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input className="input" id="name" name="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input className="input" id="phone" name="phone" type="tel" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input className="input" id="email" name="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <input
                  className="input"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="I'm interested in a 3 bed residence"
                />
              </div>
              {error && (
                <p style={{ color: "var(--color-accent-700)", fontSize: 14, margin: 0 }}>{error}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start" }}
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
        <div className="card elev-sm contact-card">
          <p className="card-kicker">Contact</p>
          <p className="card-title">{CONTACT.company}</p>
          <p className="card-body">
            Sales &amp; Realty
            <br />
            Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <br />
            Email: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
