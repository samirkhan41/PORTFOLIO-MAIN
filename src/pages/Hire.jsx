import { useState, useEffect } from "react";
import {
  Briefcase,
  Star,
  Tv,
  ArrowLeft,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

export default function Hire({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null); // 'job' | 'freelance' | 'sponsor'
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    // Common
    email: "",
    name: "",
    message: "",
    
    // Job
    company: "",
    roleTitle: "",
    jobType: "Full-Time",
    workModel: "Remote",
    salaryRange: "",
    
    // Freelance
    projectTitle: "",
    projectType: "Full Web Application",
    timeline: "1 Month",
    budget: "₹20k - ₹50k",
    techStack: "MERN Stack / React + Node.js",
    
    // Sponsor
    sponsorName: "",
    sponsorType: "Open Source Project Sponsor",
    website: "",
    offering: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePillSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSubmitted(false);
    // Smooth scroll down to form
    setTimeout(() => {
      const formEl = document.getElementById("hire-form-section");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare mailto link
    let subject = `[HIRE INQUIRY - ${selectedCategory?.toUpperCase()}] From ${formData.name || formData.company || formData.sponsorName || "Inquirer"}`;
    let body = `Hello Samir,\n\n`;

    if (selectedCategory === "job") {
      body += `Category: JOB OPPORTUNITY\n`;
      body += `Company: ${formData.company}\n`;
      body += `Role: ${formData.roleTitle}\n`;
      body += `Type: ${formData.jobType} (${formData.workModel})\n`;
      body += `Salary / Range: ${formData.salaryRange || "Negotiable"}\n`;
      body += `Contact Email: ${formData.email}\n\n`;
      body += `Job Details:\n${formData.message}\n`;
    } else if (selectedCategory === "freelance") {
      body += `Category: FREELANCE PROJECT\n`;
      body += `Client Name: ${formData.name}\n`;
      body += `Project Title: ${formData.projectTitle}\n`;
      body += `Scope: ${formData.projectType}\n`;
      body += `Timeline: ${formData.timeline}\n`;
      body += `Budget: ${formData.budget}\n`;
      body += `Tech Stack: ${formData.techStack}\n`;
      body += `Contact Email: ${formData.email}\n\n`;
      body += `Project Specifications:\n${formData.message}\n`;
    } else if (selectedCategory === "sponsor") {
      body += `Category: SPONSORSHIP / COLLABORATION\n`;
      body += `Sponsor: ${formData.sponsorName}\n`;
      body += `Contact Person: ${formData.name}\n`;
      body += `Sponsorship Type: ${formData.sponsorType}\n`;
      body += `Website: ${formData.website}\n`;
      body += `Offering: ${formData.offering}\n`;
      body += `Contact Email: ${formData.email}\n\n`;
      body += `Proposal Details:\n${formData.message}\n`;
    }

    // Trigger mailto link
    const mailtoUrl = `mailto:samirkha4575@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");

    setSubmitted(true);
  };

  const handleCopyInquiry = () => {
    const summary = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = [
    {
      id: "job",
      title: "JOB",
      subtitle: "FULL-TIME POSITION AT YOUR COMPANY",
      icon: Briefcase,
      tag: "CAREER // FULL-TIME",
      desc: "Hire me as a Full Stack / MERN Developer for your engineering team.",
    },
    {
      id: "freelance",
      title: "FREELANCE",
      subtitle: "PROJECT-BASED WORK AND GIGS",
      icon: Star,
      tag: "CONTRACT // BUILD",
      desc: "Turn your product vision into high-performance web applications and MVPs.",
    },
    {
      id: "sponsor",
      title: "SPONSOR",
      subtitle: "SPONSOR A YOUTUBE VIDEO",
      icon: Tv,
      tag: "COLLAB // PARTNER",
      desc: "Sponsor YouTube content, technical projects, or open-source tools.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-[#f4f5f0] selection:bg-neon selection:text-ink">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-dotted border-line bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            className="neo-btn-outline group flex items-center gap-2 border border-dotted border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-gray-300 transition-all duration-200 hover:border-neon hover:text-neon"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>BACK TO PORTFOLIO</span>
          </button>

          {/* Availability Status Badge */}
          <div className="flex items-center gap-2 border border-dotted border-neon/50 bg-panel px-3 py-1.5 font-mono text-[10px] text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            <span className="hidden sm:inline">STATUS:</span>
            <span>AVAILABLE TO HIRE</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Page Hero Header (Exact aesthetic from user's reference) */}
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-[#ff5c35]">
            // SELECT CATEGORY
          </p>
          <h1 className="mt-3 font-mono text-3xl font-black tracking-widest text-white sm:text-5xl uppercase drop-shadow-[0_0_16px_rgba(255,176,53,0.2)]">
            HIRE SAMIR FOR<span className="text-neon">...</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg font-mono text-xs text-gray-400">
            Click on an option below to open the dedicated inquiry form configured for that requirement.
          </p>
        </div>

        {/* 3 Square Cards (Job, Freelance, Sponsor - matches reference screenshot) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`group relative flex aspect-square flex-col p-3 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-dotted border-neon bg-panel/95 shadow-[0_0_35px_rgba(255,176,53,0.25)] -translate-y-2"
                    : "border-2 border-dotted border-line bg-panel/60 hover:border-neon hover:shadow-[0_0_24px_rgba(255,176,53,0.18)] hover:-translate-y-1.5"
                }`}
              >
                {/* Active Indicator Badge */}
                {isSelected && (
                  <span className="absolute right-4 top-4 z-10 border border-dotted border-neon bg-ink/95 px-2 py-0.5 font-mono text-[9px] font-bold text-neon shadow-[0_0_8px_rgba(255,176,53,0.4)]">
                    ACTIVE ✓
                  </span>
                )}

                {/* Inner Dotted Box matching reference image */}
                <div
                  className={`flex h-full w-full flex-col items-center justify-center p-6 border border-dotted transition-colors duration-300 ${
                    isSelected
                      ? "border-neon/80 bg-ink/90"
                      : "border-line/70 bg-[#080504]/70 group-hover:border-neon/70"
                  }`}
                >
                  {/* Pixel Icon Container */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center transition-transform duration-300 ${
                      isSelected
                        ? "text-neon scale-110 drop-shadow-[0_0_12px_rgba(255,176,53,0.6)]"
                        : "text-gray-300 group-hover:text-neon group-hover:scale-110"
                    }`}
                  >
                    <Icon size={36} strokeWidth={1.8} />
                  </div>

                  {/* Title in Retro Pixel Monospace Header */}
                  <h2
                    className={`mt-6 font-mono text-2xl font-black tracking-widest uppercase transition-colors duration-200 ${
                      isSelected
                        ? "text-neon drop-shadow-[0_0_10px_rgba(255,176,53,0.5)]"
                        : "text-white group-hover:text-neon"
                    }`}
                  >
                    {cat.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-3 font-mono text-[11px] font-medium leading-relaxed tracking-wider text-gray-300 uppercase max-w-[220px]">
                    {cat.subtitle}
                  </p>

                  {/* Status Indicator */}
                  <span
                    className={`mt-4 inline-flex items-center gap-1 font-mono text-[10px] tracking-widest transition-colors ${
                      isSelected
                        ? "text-neon font-bold"
                        : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  >
                    {isSelected ? "[ FORM OPEN BELOW ↓ ]" : "[ CLICK TO CONFIGURE ]"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Form Section */}
        {selectedCategory && (
          <section
            id="hire-form-section"
            className="mt-14 scroll-mt-24 border border-dotted border-line bg-panel/60 p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Form Header with Category Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dotted border-line pb-6">
              <div>
                <p className="font-mono text-xs text-neon">
                  // STEP 02: INQUIRY SPECIFICATION
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {selectedCategory === "job" && "FULL-TIME / JOB INQUIRY"}
                  {selectedCategory === "freelance" && "FREELANCE PROJECT INQUIRY"}
                  {selectedCategory === "sponsor" && "SPONSORSHIP & COLLABORATION"}
                </h3>
              </div>

              {/* Quick Tab Switcher */}
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCategorySelect(c.id)}
                    className={`border border-dotted px-3 py-1 font-mono text-xs transition-colors ${
                      selectedCategory === c.id
                        ? "border-neon bg-neon text-ink font-bold"
                        : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Submission Confirmation State */}
            {submitted ? (
              <div className="py-12 text-center animate-fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-dotted border-neon bg-neon/10 text-neon">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="mt-4 text-2xl font-bold text-white">
                  TRANSMISSION DISPATCHED // SUCCESS
                </h4>
                <p className="mx-auto mt-2 max-w-md font-mono text-xs text-gray-300">
                  Your inquiry email client has been triggered. Alternatively,
                  you can directly reach me at{" "}
                  <a
                    href="mailto:samirkha4575@gmail.com"
                    className="text-neon underline hover:text-[#ffd166]"
                  >
                    samirkha4575@gmail.com
                  </a>
                  . I will review and reply within 24 hours.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="neo-btn-outline flex items-center gap-2 border border-dotted border-line bg-panel px-4 py-2 font-mono text-xs text-gray-300 hover:border-neon hover:text-neon"
                  >
                    {copied ? <Check size={14} className="text-neon" /> : <Copy size={14} />}
                    <span>{copied ? "COPIED TO CLIPBOARD" : "COPY DETAILS"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="neo-btn-outline border border-dotted border-neon px-4 py-2 font-mono text-xs text-neon hover:bg-neon hover:text-ink"
                  >
                    EDIT INQUIRY
                  </button>

                  <button
                    type="button"
                    onClick={onBack}
                    className="neo-btn-primary bg-neon px-5 py-2 font-mono text-xs font-bold text-ink"
                  >
                    RETURN TO PORTFOLIO
                  </button>
                </div>
              </div>
            ) : (
              /* The Tailored Dynamic Form */
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* ========================================================
                    1. JOB SPECIFIC FIELDS
                   ======================================================== */}
                {selectedCategory === "job" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Company / Organization Name <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Acme Labs Inc."
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Role Title <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="roleTitle"
                          required
                          value={formData.roleTitle}
                          onChange={handleInputChange}
                          placeholder="e.g. Full Stack Developer / SDE-1"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Job Type
                        </label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["Full-Time", "Internship", "Contract"].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => handlePillSelect("jobType", type)}
                              className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                                formData.jobType === type
                                  ? "border-neon bg-neon/15 font-bold text-neon"
                                  : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Work Model
                        </label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["Remote", "Hybrid", "On-Site"].map((model) => (
                            <button
                              key={model}
                              type="button"
                              onClick={() => handlePillSelect("workModel", model)}
                              className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                                formData.workModel === model
                                  ? "border-neon bg-neon/15 font-bold text-neon"
                                  : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                              }`}
                            >
                              {model}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Salary / Compensation Range
                        </label>
                        <input
                          type="text"
                          name="salaryRange"
                          value={formData.salaryRange}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹6 - 12 LPA or $40k - $70k"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Your Work Email <span className="text-neon">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="recruiter@company.com"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    2. FREELANCE SPECIFIC FIELDS
                   ======================================================== */}
                {selectedCategory === "freelance" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Your Name / Business Name <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Morgan / Studio Alpha"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Project Title <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="projectTitle"
                          required
                          value={formData.projectTitle}
                          onChange={handleInputChange}
                          placeholder="e.g. SaaS Dashboard MVP / Ecommerce Platform"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-gray-300">
                        Project Scope / Deliverable Type
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          "Full Web Application",
                          "MVP from Scratch",
                          "API & Backend System",
                          "Frontend & UI/UX",
                          "Full Stack Refactor",
                        ].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handlePillSelect("projectType", type)}
                            className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                              formData.projectType === type
                                ? "border-neon bg-neon/15 font-bold text-neon"
                                : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Estimated Timeline
                        </label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["< 2 Weeks", "1 Month", "2-3 Months", "Flexible"].map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handlePillSelect("timeline", time)}
                              className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                                formData.timeline === time
                                  ? "border-neon bg-neon/15 font-bold text-neon"
                                  : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Budget Range
                        </label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {[
                            "₹20k - ₹50k",
                            "₹50k - ₹1L",
                            "₹1L+",
                            "$500 - $1.5k",
                            "$1.5k+",
                          ].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => handlePillSelect("budget", b)}
                              className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                                formData.budget === b
                                  ? "border-neon bg-neon/15 font-bold text-neon"
                                  : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Tech Stack Preferences
                        </label>
                        <input
                          type="text"
                          name="techStack"
                          value={formData.techStack}
                          onChange={handleInputChange}
                          placeholder="e.g. React, Node.js, TypeScript, Tailwind"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Your Email <span className="text-neon">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="client@gmail.com"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    3. SPONSOR SPECIFIC FIELDS
                   ======================================================== */}
                {selectedCategory === "sponsor" && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Sponsor / Brand Name <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="sponsorName"
                          required
                          value={formData.sponsorName}
                          onChange={handleInputChange}
                          placeholder="e.g. TechCorp / CloudHost"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Contact Person Name <span className="text-neon">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-gray-300">
                        Sponsorship / Collaboration Type
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          "Open Source Project Sponsor",
                          "Hackathon / Event Sponsor",
                          "Feature Integration Partner",
                          "Tech Talk / Workshop",
                          "Developer Community Swag",
                        ].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => handlePillSelect("sponsorType", t)}
                            className={`border border-dotted px-3 py-2 font-mono text-xs transition-colors ${
                              formData.sponsorType === t
                                ? "border-neon bg-neon/15 font-bold text-neon"
                                : "border-line bg-ink text-gray-400 hover:border-line hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Website / Organization URL
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://yourcompany.com"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-gray-300">
                          Offering / Budget Range
                        </label>
                        <input
                          type="text"
                          name="offering"
                          value={formData.offering}
                          onChange={handleInputChange}
                          placeholder="e.g. $500 / Cloud Credits / API Access"
                          className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-gray-300">
                        Contact Email <span className="text-neon">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sponsor@brand.com"
                        className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Description & Additional Details (All Categories) */}
                <div>
                  <label className="block font-mono text-xs text-gray-300">
                    Additional Details & Requirements <span className="text-neon">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your requirements, expectations, and any links or documents..."
                    className="mt-2 w-full border border-dotted border-line bg-ink px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:border-neon focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Form Action Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dotted border-line pt-6">
                  <p className="font-mono text-[10px] text-gray-400">
                    DIRECT DISPATCH TO:{" "}
                    <span className="font-semibold text-neon">
                      samirkha4575@gmail.com
                    </span>
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={onBack}
                      className="neo-btn-outline border border-dotted border-line px-5 py-3 font-mono text-xs text-gray-300 hover:border-neon hover:text-neon"
                    >
                      CANCEL
                    </button>

                    <button
                      type="submit"
                      className="neo-btn-primary flex items-center gap-2 bg-neon px-6 py-3 font-mono text-xs font-bold text-ink hover:bg-[#ffc466] shadow-[0_4px_16px_rgba(255,176,53,0.25)]"
                    >
                      <span>TRANSMIT INQUIRY</span>
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        )}

        {/* Footer Technical Note */}
        <div className="mt-16 text-center font-mono text-[11px] text-gray-500">
          <p>
            SAMIR KHAN // FULL STACK DEVELOPER // DEHRADUN, INDIA // AVAILABLE WORLDWIDE
          </p>
        </div>
      </main>
    </div>
  );
}
