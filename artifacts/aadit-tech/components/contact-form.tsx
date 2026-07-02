"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"

type Status = "idle" | "submitting" | "success" | "error"

const CONTACT_EMAIL = "anilgorraladaku@gmail.com"

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("submitting")

    const formData = new FormData(form)
    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      params.append(key, typeof value === "string" ? value : "")
    })

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="text-xl font-bold text-foreground">Thanks — your message is on its way.</h2>
        <p className="mt-3 text-muted-foreground">
          We&apos;ve received your enquiry and a member of our team will get back to you. For
          anything urgent, email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      {/* Identifies the form to Netlify; also sent with the fetch submission. */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field for spam bots — visually hidden from real users. */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className={labelClass}>
          How can we help?
        </label>
        <select id="topic" name="topic" defaultValue="General enquiry" className={inputClass}>
          <option>General enquiry</option>
          <option>Cybersecurity</option>
          <option>Compliance &amp; Audit</option>
          <option>IT Managed Services</option>
          <option>Partnership</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell us about your security, compliance, or IT needs…"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form you agree to be contacted about your enquiry.
      </p>
    </form>
  )
}
