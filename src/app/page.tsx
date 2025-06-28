"use client";
import Image from "next/image";
import {
  FaGithub,
  FaWhatsapp,
  FaChevronDown,
  FaCube,
  FaServer,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiCode, FiLayout } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import { translations } from "@/translations";

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "tr">("en");

  const t = translations[currentLanguage];

  const handleLanguageChange = (lang: "en" | "tr") => {
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:hidden z-50">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <span className="font-semibold text-gray-900 text-base">
            Deniz Barçak
          </span>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
          >
            <span>{currentLanguage.toUpperCase()}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isLanguageOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Language Dropdown */}
          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === "en"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("tr")}
                className={`w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === "tr"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Türkçe
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar - Hidden on mobile unless menu is open */}
      <aside
        className={`w-64 fixed top-0 left-0 h-screen bg-white border-r border-gray-300 p-8 flex flex-col transform 
        lg:translate-x-0 transition-transform duration-300 z-40
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        ${isMobileMenuOpen ? "top-16" : "top-0"} lg:top-0`}
      >
        {/* Add language selector for mobile menu */}
        <div className="lg:hidden mb-4 border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t.language}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 text-sm rounded-md ${
                  currentLanguage === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("tr")}
                className={`px-3 py-1 text-sm rounded-md ${
                  currentLanguage === "tr"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                TR
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Profile Section */}
        <div className="lg:hidden mb-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3">
            <Image
              src="/img/profil.png"
              alt="Deniz Barçak"
              width={96}
              height={96}
              className="object-cover"
              unoptimized
            />
          </div>
          <h2 className="text-lg font-medium text-gray-900">Deniz Barçak</h2>
          <p className="text-sm text-gray-600">{t.hero.role}</p>
        </div>

        <div className="text-center lg:block hidden">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
            <Image
              src="/img/profil.png"
              alt="Deniz Barçak"
              width={128}
              height={128}
              className="object-cover"
              unoptimized
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
            Deniz Barçak
          </h1>
          <p className="text-gray-600 mt-1">{t.hero.role}</p>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors block py-2 text-center"
              >
                {t.navigation.about}
              </Link>
            </li>
            <li>
              <Link
                href="#what-i-do"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors block py-2 text-center"
              >
                {t.whatIDo.title}
              </Link>
            </li>
            <li>
              <Link
                href="#resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors block py-2 text-center"
              >
                {t.navigation.resume}
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                onClick={() => {
                  setIsPortfolioOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors block py-2 text-center"
              >
                {t.portfolio.title}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors block py-2 text-center"
              >
                {t.contact.title}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="mt-auto">
          {/* Language Selector for Desktop */}
          <div className="hidden lg:block mb-6">
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1.5 text-sm rounded-md mr-2 ${
                  currentLanguage === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("tr")}
                className={`px-3 py-1.5 text-sm rounded-md ${
                  currentLanguage === "tr"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Türkçe
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="mailto:denizbarcak@gmail.com"
              className="text-gray-400 hover:text-gray-600"
              title="Send email"
            >
              <MdEmail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
              title="Contact on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/denizbarcak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
              title="View GitHub profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 flex-1 bg-gray-100 overflow-x-hidden pt-16 lg:pt-0">
        {/* Hero Section */}
        <section
          id="about"
          className="lg:h-[800px] min-h-[600px] flex flex-col lg:flex-row items-stretch"
        >
          <div className="flex w-full flex-col-reverse lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 py-8 lg:py-0 flex flex-col justify-center">
              <p className="text-gray-500 mb-4 tracking-tight">{t.hero.role}</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                {t.hero.title}
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                {t.hero.description}
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {t.hero.buttons.download}
                </button>
                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
                >
                  {t.hero.buttons.contact}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[800px]">
              <div className="relative w-full h-full">
                <Image
                  src="/img/profile.jpeg"
                  alt="Deniz Barçak"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section id="what-i-do" className="py-10 px-4 bg-white">
          <div className="w-full">
            <div className="px-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 pb-2 border-b w-24 whitespace-nowrap">
                {t.whatIDo.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Frontend Development */}
              <div className="p-5 bg-gray-100 hover:bg-gray-200 transition-colors">
                <div className="text-blue-600 mb-2">
                  <FiCode className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                  {t.whatIDo.cards.frontend.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.whatIDo.cards.frontend.description}
                </p>
              </div>

              {/* Backend Development */}
              <div className="p-5 bg-gray-100 hover:bg-gray-200 transition-colors">
                <div className="text-blue-600 mb-2">
                  <FaServer className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                  {t.whatIDo.cards.responsive.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.whatIDo.cards.responsive.description}
                </p>
              </div>

              {/* UI/UX Design */}
              <div className="p-5 bg-gray-100 hover:bg-gray-200 transition-colors">
                <div className="text-blue-600 mb-2">
                  <FiLayout className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                  {t.whatIDo.cards.uiux.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.whatIDo.cards.uiux.description}
                </p>
              </div>

              {/* Web Performance -> 3D Modeling & CAD Planning */}
              <div className="p-5 bg-gray-100 hover:bg-gray-200 transition-colors">
                <div className="text-blue-600 mb-2">
                  <FaCube className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                  {t.whatIDo.cards.performance.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t.whatIDo.cards.performance.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Skills Section */}
        <section id="resume" className="py-8 px-4 bg-gray-100">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[68%_32%] gap-6 relative max-w-7xl mx-auto">
            {/* Vertical Divider - Only show on desktop */}
            <div className="hidden lg:block absolute right-[32%] w-px h-full bg-gray-200 -mx-3"></div>

            {/* Education */}
            <div className="pr-3">
              <h2 className="text-lg font-semibold text-gray-900 pb-2 mb-6 pl-4 relative">
                <span className="border-b pb-2 inline-block">
                  {t.sections.education}
                </span>
              </h2>

              <div className="space-y-3">
                <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      Frontend Development
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 space-x-1">
                      <span>2006</span>
                      <span>-</span>
                      <span>2008</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 mb-1.5">
                    University of Studies
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Modern web teknolojileri ve kullanıcı deneyimi tasarımı
                    üzerine uzmanlaşma.
                  </p>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      Web Design
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 space-x-1">
                      <span>2005</span>
                      <span>-</span>
                      <span>2007</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 mb-1.5">
                    University of Studies
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Kullanıcı arayüzü tasarımı ve UX prensipleri üzerine eğitim.
                  </p>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      Graphic Design
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 space-x-1">
                      <span>2004</span>
                      <span>-</span>
                      <span>2006</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600 mb-1.5">
                    University of Studies
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Grafik tasarım ilkeleri ve dijital medya üzerine eğitim.
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 pb-2 mb-6 pl-4 relative">
                  <span className="border-b pb-2 inline-block">Experience</span>
                </h2>

                <div className="space-y-3">
                  <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Consulta Independent Audit INC
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <span>2020</span>
                        <span>-</span>
                        <span>Present</span>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 mb-1.5">
                      Tech Company Inc.
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Modern frontend teknolojileri kullanarak büyük ölçekli web
                      uygulamaları geliştirme. React ve Next.js ile performans
                      odaklı projeler yönetimi.
                    </p>
                  </div>

                  <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Frontend Developer
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <span>2018</span>
                        <span>-</span>
                        <span>2020</span>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 mb-1.5">
                      Digital Agency Ltd.
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Responsive web uygulamaları geliştirme, UI/UX tasarım
                      süreçlerine katkı ve modern frontend teknolojilerinin
                      implementasyonu.
                    </p>
                  </div>

                  <div className="relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Junior Web Developer
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <span>2016</span>
                        <span>-</span>
                        <span>2018</span>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 mb-1.5">
                      StartUp Solutions
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      HTML, CSS ve JavaScript ile web siteleri geliştirme,
                      responsive tasarım prensiplerini uygulama ve kod
                      optimizasyonu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Skills */}
            <div className="pr-5">
              <h2 className="text-lg font-semibold text-gray-900 pb-2 mb-6 pl-2 relative">
                <span className="border-b pb-2 inline-block">
                  {t.sections.codingSkills}
                </span>
              </h2>

              <div className="grid grid-cols-2 gap-3 px-2">
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    HTML & CSS
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    JavaScript
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    React
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    Next.js
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    TypeScript
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-900">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Design & Technical Skills */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 pb-2 mb-6 pl-2 relative">
                  <span className="border-b pb-2 inline-block">
                    {t.sections.designSkills}
                  </span>
                </h2>

                <div className="grid grid-cols-2 gap-3 px-2">
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      AutoCAD
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      3ds Max
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      SketchUp
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      V-Ray
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      Revit
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-gray-900">
                      Adobe Creative Suite
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-8 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-lg">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="w-full flex flex-col items-center justify-center gap-2 p-4 bg-white text-black rounded-lg hover:bg-white transition-colors"
              >
                <h2 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                  {t.portfolio.title}
                  <FaChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isPortfolioOpen ? "rotate-180" : ""
                    }`}
                  />
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {isPortfolioOpen
                    ? t.portfolio.closeText
                    : t.portfolio.viewText}
                </p>
              </button>

              {isPortfolioOpen && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Project cards */}
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <Image
                          src="/img/profile.jpeg"
                          alt={`${t.portfolio.projectTitle} ${index}`}
                          width={600}
                          height={400}
                          className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <h3 className="text-xl font-semibold mb-2">
                              {t.portfolio.projectTitle}
                            </h3>
                            <p className="text-sm">
                              {t.portfolio.projectDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4 bg-blue-600">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              {t.contact.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Email */}
              <a
                href="mailto:denizbarcak@gmail.com"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MdEmail className="text-2xl text-blue-800" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {t.contact.email}
                  </h3>
                  <p className="text-sm text-gray-600 break-all">
                    denizbarcak@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+90 539 483 23 22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MdPhone className="text-2xl text-blue-800" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {t.contact.phone}
                  </h3>
                  <p className="text-sm text-gray-600">+90 539 483 23 22</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905394832322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaWhatsapp className="text-2xl text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {t.contact.whatsapp}
                  </h3>
                  <p className="text-sm text-gray-600">+90 539 483 23 22</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/denizbarcak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaGithub className="text-2xl text-blue-800" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {t.contact.github}
                  </h3>
                  <p className="text-sm text-gray-600">
                    github.com/denizbarcak
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
