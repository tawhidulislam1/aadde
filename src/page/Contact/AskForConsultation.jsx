import React, { useState } from "react";

const translations = {
  EN: {
    title: "Ask for Consultation",
    halfHour: "Request a half-hour discussion",
    speaker: "Speaker request",
    apply: "Please apply info@aadde.ca",
    submit: "Submit Request",
    languageBtn: "FR",
  },
  FR: {
    title: "Demander une consultation",
    halfHour: "Demander une discussion de 30 minutes",
    speaker: "Demande de conférencier",
    apply: "Veuillez postuler à info@aadde.ca",
    submit: "Envoyer la demande",
    languageBtn: "EN",
  },
};

export default function AskForConsultation() {
  const [lang, setLang] = useState("EN");
  const t = translations[lang];

  const toggleLanguage = () => setLang(lang === "EN" ? "FR" : "EN");

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8 mt-20">
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
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="form-checkbox" />
          <span>{t.halfHour}</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="form-checkbox" />
          <span>{t.speaker}</span>
        </label>

        <p className="text-sm text-gray-500 italic">{t.apply}</p>

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white py-3 rounded hover:bg-indigo-800 transition"
        >
          {t.submit}
        </button>
      </form>
    </section>
  );
}
