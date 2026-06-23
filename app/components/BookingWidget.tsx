"use client";

import { FormEvent, useMemo, useState } from "react";

const treatments = [
  "Medycyna estetyczna twarzy",
  "Modelowanie ust",
  "Terapie przeciwstarzeniowe",
  "Kosmetologia",
  "Laseroterapia",
  "Konsultacja lekarska",
];

const timeSlots = ["12:00", "14:30", "16:00", "17:15"];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`)).replace(".", "");
}

export function BookingWidget() {
  const [treatment, setTreatment] = useState(treatments[0]);
  const [date, setDate] = useState("2026-06-24");
  const [time, setTime] = useState("14:30");
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const summary = useMemo(
    () => `${treatment} · ${formatDate(date)} · ${time}`,
    [date, time, treatment],
  );

  function resetConfirmation() {
    if (confirmationOpen) setConfirmationOpen(false);
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmationOpen(true);
  }

  return (
    <>
      <form onSubmit={submitBooking} className="rounded-[24px] border border-sand bg-white p-8 shadow-sm">
        <div className="space-y-5">
          <div>
            <label htmlFor="treatment" className="eyebrow mb-2 block text-stone">
              Zabieg
            </label>
            <select
              id="treatment"
              value={treatment}
              onChange={(event) => {
                setTreatment(event.target.value);
                resetConfirmation();
              }}
              className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-taupe"
            >
              {treatments.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-date" className="eyebrow mb-2 block text-stone">
                Data
              </label>
              <input
                id="booking-date"
                type="date"
                min="2026-06-24"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  resetConfirmation();
                }}
                className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-taupe"
              />
            </div>
            <div>
              <span className="eyebrow mb-2 block text-stone">Godzina</span>
              <div className="rounded-xl border border-sand px-4 py-3 text-sm text-charcoal">
                {time}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-1">
            {timeSlots.map((slot) => {
              const selected = slot === time;
              return (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setTime(slot);
                    resetConfirmation();
                  }}
                  className={`select-none rounded-lg py-2 text-center text-xs transition-colors ${
                    selected ? "bg-charcoal text-ivory" : "bg-sand/60 text-stone hover:bg-sand"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-sand/45 px-4 py-3 text-sm text-stone">
            <span className="mb-1 block text-[11px] uppercase tracking-[.2em] text-taupe">
              Wybrany termin
            </span>
            <span className="text-charcoal">{summary}</span>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-charcoal py-3.5 text-sm text-ivory transition-colors hover:bg-bronze"
          >
            Potwierdź rezerwację
          </button>

          <p className="text-center text-[11px] text-stone">
            Bezpłatne odwołanie do 24 h przed wizytą
          </p>
        </div>
      </form>

      {confirmationOpen ? (
        <div className="fixed inset-x-4 bottom-5 z-50 mx-auto max-w-xl rounded-[24px] border border-taupe/35 bg-ivory p-5 shadow-2xl shadow-charcoal/20 md:bottom-8">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/20 text-bronze">
              ✓
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow mb-2 text-taupe">Rezerwacja przyjęta</p>
              <h3 className="mb-2 font-serif text-2xl leading-tight text-charcoal">
                Dziękujemy, termin został wybrany.
              </h3>
              <p className="text-sm leading-relaxed text-stone">
                Wersja demo: potwierdzenie dla terminu <span className="text-charcoal">{summary}</span> pojawiłoby się SMS-em i e-mailem.
              </p>
            </div>
            <button
              type="button"
              aria-label="Zamknij potwierdzenie"
              onClick={() => setConfirmationOpen(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand text-stone transition-colors hover:border-taupe hover:text-charcoal"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
