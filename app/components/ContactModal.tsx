"use client";

import { FormEvent, useState } from "react";
import { Check, Mail, Phone, User, X } from "lucide-react";
import { createPortal } from "react-dom";

import { submitAudit } from "@/app/lib/submitAudit";
import { AuditFormData } from "@/app/psychology-system/types";

type ContactField = keyof AuditFormData;

export interface ContactModalConfig {
  eyebrow?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  source?: string;
  showCompany?: boolean;
  showWebsite?: boolean;
  serviceOptions?: string[];
  fields?: Partial<
    Record<ContactField, { label?: string; placeholder?: string }>
  >;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: ContactModalConfig;
}

const defaultConfig: Required<
  Omit<ContactModalConfig, "fields">
> & { fields: NonNullable<ContactModalConfig["fields"]> } = {
  eyebrow: "Discuție inițială",
  title: "Hai să discutăm proiectul tău",
  description:
    "Lasă-ne câteva detalii și revenim cu următorii pași potriviți pentru situația ta.",
  submitLabel: "Trimite solicitarea",
  source: "global-contact-modal",
  showCompany: true,
  showWebsite: true,
  serviceOptions: [],
  fields: {},
};

const initialFormData: AuditFormData = {
  fullName: "",
  email: "",
  phone: "",
  clinicOrName: "",
  currentWebsiteOrProfile: "",
  city: "",
  notes: "",
};

export function ContactModal({
  isOpen,
  onClose,
  config,
}: ContactModalProps) {
  const content = {
    ...defaultConfig,
    ...config,
    fields: { ...defaultConfig.fields, ...config?.fields },
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  if (!isOpen || typeof document === "undefined") return null;

  const field = (name: ContactField, fallbackLabel: string, fallbackPlaceholder: string) => ({
    label: content.fields[name]?.label ?? fallbackLabel,
    placeholder: content.fields[name]?.placeholder ?? fallbackPlaceholder,
  });

  const fullName = field("fullName", "Nume și prenume", "ex. Andrei Popescu");
  const email = field("email", "Email", "email@companie.ro");
  const phone = field("phone", "Telefon", "07xx xxx xxx");
  const company = field("clinicOrName", "Companie / proiect", "Numele companiei");
  const city = field("city", "Oraș", "București, Cluj...");
  const website = field(
    "currentWebsiteOrProfile",
    "Website actual",
    "https://...",
  );
  const notes = field("notes", "Cum te putem ajuta?", "Scrie câteva detalii...");

  const updateField = (name: ContactField, value: string) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitAudit(
        { ...formData, city: formData.city || "Online" },
        content.source,
      );
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "A apărut o eroare la trimiterea formularului.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-2 backdrop-blur-sm sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100vw-1rem)] overflow-y-auto rounded-2xl bg-white shadow-2xl sm:max-w-lg"
        onMouseDown={(event) => event.stopPropagation()}
        onTouchStart={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          aria-label="Închide formularul"
        >
          <X className="size-5" />
        </button>

        <div className="p-3 sm:p-6">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Check className="size-7" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Am primit mesajul tău.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Revenim cât mai curând cu un răspuns.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Închide
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="pr-8">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {content.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  {content.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {content.description}
                </p>
              </div>

              <ContactInput
                icon={<User className="size-4" />}
                required
                value={formData.fullName}
                onChange={(value) => updateField("fullName", value)}
                {...fullName}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <ContactInput
                  icon={<Phone className="size-4" />}
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => updateField("phone", value)}
                  {...phone}
                />
                <ContactInput
                  icon={<Mail className="size-4" />}
                  required
                  type="email"
                  value={formData.email}
                  onChange={(value) => updateField("email", value)}
                  {...email}
                />
              </div>
              {content.serviceOptions.length > 0 ? (
                <label className="block text-xs font-bold text-slate-700">
                  Serviciul de care ai nevoie
                  <select
                    required
                    value={formData.clinicOrName}
                    onChange={(event) =>
                      updateField("clinicOrName", event.target.value)
                    }
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-normal text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:bg-white"
                  >
                    <option value="">Selectează un serviciu</option>
                    {content.serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <ContactInput
                  required
                  value={formData.clinicOrName}
                  onChange={(value) => updateField("clinicOrName", value)}
                  {...company}
                />
              )}
              {content.showCompany && (
                <ContactInput
                  required
                  value={formData.city}
                  onChange={(value) => updateField("city", value)}
                  {...city}
                />
              )}
              {content.showWebsite && (
                <ContactInput
                  value={formData.currentWebsiteOrProfile}
                  onChange={(value) =>
                    updateField("currentWebsiteOrProfile", value)
                  }
                  {...website}
                />
              )}
              <label className="block text-xs font-bold text-slate-700">
                {notes.label}
                <textarea
                  value={formData.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder={notes.placeholder}
                  rows={2}
                  className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-normal text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:bg-white"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Se trimite..." : content.submitLabel}
              </button>
              {submitError && (
                <p role="alert" className="text-center text-xs text-red-600">
                  {submitError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
    ),
    document.body,
  );
}

function ContactInput({
  label,
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-xs font-bold text-slate-700">
      {label}
      <span className="relative mt-1.5 block">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-slate-200 bg-slate-50 py-2 text-sm font-normal text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:bg-white ${
            icon ? "pl-10 pr-3.5" : "px-3.5"
          }`}
        />
      </span>
    </label>
  );
}
