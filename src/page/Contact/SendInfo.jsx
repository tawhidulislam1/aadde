import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const areas = [
  "Human Resource",
  "Strategy",
  "Digital Transformation",
  "Project Management",
  "Brand Management",
  "Other",
  "Join Us",
];

const translations = {
  EN: {
    title: "Send Info",
    name: "Name",
    phone: "Phone",
    email: "E-mail",
    socialMedia: "Social Media",
    linkedin: "LinkedIn ID",
    instagram: "Instagram ID",
    facebook: "Facebook ID",
    whatsapp: "WhatsApp ID",
    area: "Area",
    question: "Question / Comment",
    submit: "Send Information",
    languageBtn: "FR",
    addresses: ["Dhaka – Gulshan", "Toronto – Danforth"],
  },
  FR: {
    title: "Envoyer des informations",
    name: "Nom",
    phone: "Téléphone",
    email: "E-mail",
    socialMedia: "Réseaux sociaux",
    linkedin: "ID LinkedIn",
    instagram: "ID Instagram",
    facebook: "ID Facebook",
    whatsapp: "ID WhatsApp",
    area: "Secteur",
    question: "Question / Commentaire",
    submit: "Envoyer les informations",
    languageBtn: "EN",
    addresses: ["Dhaka – Gulshan", "Toronto – Danforth"],
  },
};

export default function SendInfo() {
  const [lang, setLang] = useState("EN");
  const t = translations[lang];

  const toggleLanguage = () => setLang(lang === "EN" ? "FR" : "EN");

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">{t.title}</h1>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 border border-indigo-700 rounded font-semibold text-indigo-700 hover:bg-indigo-100"
          aria-label="Toggle Language"
        >
          {t.languageBtn}
        </button>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">{t.name}</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 p-3 rounded focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">{t.phone}</label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-3 rounded focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">{t.email}</label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 p-3 rounded focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <fieldset className="border border-gray-300 p-4 rounded space-y-4">
          <legend className="font-semibold">{t.socialMedia}</legend>

          <div>
            <label className="flex items-center gap-2">
              <FaLinkedinIn className="text-blue-600" />
              <input
                type="text"
                placeholder={t.linkedin}
                className="flex-1 border border-gray-300 p-2 rounded focus:ring-indigo-500 focus:outline-none"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <FaInstagram className="text-pink-600" />
              <input
                type="text"
                placeholder={t.instagram}
                className="flex-1 border border-gray-300 p-2 rounded focus:ring-indigo-500 focus:outline-none"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <FaFacebookF className="text-blue-800" />
              <input
                type="text"
                placeholder={t.facebook}
                className="flex-1 border border-gray-300 p-2 rounded focus:ring-indigo-500 focus:outline-none"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <input
                type="text"
                placeholder={t.whatsapp}
                className="flex-1 border border-gray-300 p-2 rounded focus:ring-indigo-500 focus:outline-none"
              />
            </label>
          </div>
        </fieldset>

        <div>
          <label className="block font-semibold mb-1">{t.area}</label>
          <select
            className="w-full border border-gray-300 p-3 rounded focus:ring-indigo-500 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              -- {t.area} --
            </option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">{t.question}</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 p-3 rounded focus:ring-indigo-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white py-3 rounded hover:bg-indigo-800 transition"
        >
          {t.submit}
        </button>
      </form>

      {/* Addresses + Client Website */}
      <div className="mt-8 text-gray-700 space-y-4">
        <h2 className="text-xl font-semibold">Address</h2>
        <ul className="space-y-2">
          {t.addresses.map((addr) => (
            <li key={addr} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.657M16 8a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {addr}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
