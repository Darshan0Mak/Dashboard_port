"use client";

import { useState, useEffect } from "react";

// ─── Analytics Tracker Helper ────────────────────────────────────────────────
const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export default function ContactPage() {
  const [headerVisible, setHeaderVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitResult, setSubmitResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 500) {
        setSubmitStatus("error");
        setSubmitResult("Something went wrong. Please try again later.");
        trackEvent("form_submission_failed", { reason: "server_500" });
        return;
      }

      const data = await res.json();

      if (!data.success) {
        setSubmitStatus("error");
        setSubmitResult(
          data.message || "Something went wrong. Please try again later.",
        );
        trackEvent("form_submission_failed", {
          reason: data.message || "validation_error",
        });
        return;
      }

      // Success Conversion Event for Google Analytics
      trackEvent("generate_lead", {
        lead_name: formData.name,
        lead_subject: formData.subject,
        method: "contact_form",
      });

      setSubmitStatus("success");
      setSubmitResult(
        data.message ||
          "Contact form submitted successfully! I'll get back to you soon.",
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitResult(
        error.message ||
          "An unexpected error occurred. Please try again later.",
      );
      trackEvent("form_submission_failed", { reason: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Subtle dot bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-300 mx-auto px-4 sm:px-6 my-14 py-20 sm:py-20">
        {/* ── Header ── */}
        <div className="mb-12 sm:mb-20 text-center lg:text-left">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease",
            }}
          >
            Get in touch
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s ease 0.07s",
            }}
          >
            Let&apos;s build something <br /> great together.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left Side: Contact Info ── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:darshanmakwana0896@gmail.com"
                  onClick={() =>
                    trackEvent("contact_link_click", {
                      type: "direct_email",
                      target: "darshanmakwana0896@gmail.com",
                    })
                  }
                  className="group block"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Email
                  </p>
                  <p className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    darshanmakwana0896@gmail.com
                  </p>
                </a>
                <div className="group block">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="text-xl font-medium text-gray-900 dark:text-white">
                    Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Socials
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/darshan0makwana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("social_click", {
                      platform: "linkedin",
                      destination:
                        "https://www.linkedin.com/in/darshan0makwana/",
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:bg-[#0A66C2] hover:text-white transition-all hover:border-[#0A66C2] hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Behance Link */}
                <a
                  href="https://www.behance.net/darshanmakwana0896"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("social_click", {
                      platform: "behance",
                      destination: "https://www.behance.net/darshanmakwana0896",
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:bg-[#0057ff] hover:text-white transition-all hover:border-[#0057ff] hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0 2.4-1.5 4.5-4.5 4.5s-4.5-2.1-4.5-4.5c0-2.4 1.5-4.5 4.5-4.5s4.5 2.1 4.5 4.5zm-4.5-2.5c-1.5 0-2 1.2-2 2.5s.5 2.5 2 2.5 2-1.2 2-2.5-.5-2.5-2-2.5zm-7.5 4.5h-5.5v-2h5.5v2zm0-3h-5.5v-2h5.5v2zm0-3h-5.5v-2h5.5v2zm11 1.5h-4v.5h4v-.5z" />
                  </svg>
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Side: Contact Form ── */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-500/5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  placeholder="Project Inquiry"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer disabled:cursor-not-allowed sm:col-span-2 mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-xl shadow-blue-600/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending message...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {(submitStatus === "success" || submitStatus === "error") &&
                !isSubmitting && (
                  <div
                    className={`p-4 rounded-xl text-sm col-span-2 ${
                      submitStatus === "error"
                        ? "bg-red-500/10 text-red-500 border border-red-500/20"
                        : "bg-green-500/10 text-green-500 border border-green-500/20"
                    }`}
                  >
                    {submitResult}
                  </div>
                )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
