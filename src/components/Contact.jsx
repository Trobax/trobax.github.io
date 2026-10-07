"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Copy } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "./Icons";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";

const socialPlatforms = [
  { name: "LinkedIn", url: "https://bit.ly/2GOFsWy", icon: LinkedinIcon },
  { name: "Facebook", url: "https://bit.ly/2Lb6m0r", icon: FacebookIcon },
  { name: "Twitter", url: "https://bit.ly/2DEYFt1", icon: TwitterIcon },
];

const Contact = () => {
  const { email, phone } = portfolioData.contact;
  const [copied, setCopied] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  const rows = [
    { key: "email", value: email, href: `mailto:${email}`, icon: Mail, copy: true },
    { key: "phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}`, icon: Phone, copy: true },
    { key: "location", value: "Tetouan, Morocco", icon: MapPin },
  ];

  return (
    <section id="contact" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="06" file="contact.sh" title="Get in touch">
          Open to senior engineering roles and interesting projects.
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="win lg:col-span-5">
            <div className="win-bar">
              <span>contact.json</span>
            </div>
            <ul className="divide-y divide-line">
              {rows.map(({ key, value, href, icon: Icon, copy }) => (
                <li key={key} className="flex items-center justify-between gap-3 px-5 py-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-dim" />
                    <div className="min-w-0 font-mono text-sm">
                      <span className="block text-xs text-faint">{key}</span>
                      {href ? (
                        <a href={href} className="break-all text-foreground hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        <span className="text-foreground">{value}</span>
                      )}
                    </div>
                  </div>
                  {copy && (
                    <button
                      onClick={() => handleCopy(value, key)}
                      className="p-1.5 text-dim hover:text-accent"
                      aria-label={`Copy ${key}`}
                    >
                      {copied === key ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 border-t border-line p-4">
              {socialPlatforms.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  aria-label={name}
                  className="p-2 text-dim transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="win lg:col-span-7">
            <div className="win-bar">
              <span>send_message</span>
            </div>
            {formSubmitted ? (
              <div className="space-y-2 p-8 font-mono text-sm">
                <p className="text-accent">✓ message queued</p>
                <p className="text-dim">Thanks for reaching out — I&apos;ll reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="font-mono text-xs text-dim">--name</span>
                    <input
                      className="field"
                      required
                      value={formData.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="font-mono text-xs text-dim">--email</span>
                    <input
                      className="field"
                      type="email"
                      required
                      value={formData.email}
                      onChange={update("email")}
                      placeholder="jane@example.com"
                    />
                  </label>
                </div>
                <label className="block space-y-1.5">
                  <span className="font-mono text-xs text-dim">--subject</span>
                  <input
                    className="field"
                    value={formData.subject}
                    onChange={update("subject")}
                    placeholder="Role / project inquiry"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="font-mono text-xs text-dim">--message</span>
                  <textarea
                    className="field resize-none"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={update("message")}
                    placeholder="Tell me about it..."
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  send <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;