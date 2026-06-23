import Image from "next/image";
import { BookingWidget } from "./components/BookingWidget";

const treatments = [
  ["Medycyna estetyczna twarzy", "Toksyna botulinowa, mezoterapia i stymulatory tkankowe dla świeżego, wypoczętego wyglądu."],
  ["Modelowanie ust", "Naturalne wypełnienia kwasem hialuronowym - harmonia i proporcja dopasowane do rysów twarzy."],
  ["Terapie przeciwstarzeniowe", "Lifting bez skalpela: nici PDO, radiofrekwencja mikroigłowa i kolagenoterapia."],
  ["Kosmetologia", "Peelingi medyczne, oczyszczanie wodorowe i pielęgnacja dobrana do potrzeb skóry."],
  ["Laseroterapia", "Usuwanie przebarwień, zamykanie naczynek i fotoodmładzanie nowoczesnym laserem frakcyjnym."],
  ["Konsultacje", "Indywidualny plan terapii i diagnostyka skóry - pierwszy krok do przemyślanej metamorfozy."],
];

const reviews = [
  ["Anna K.", "modelowanie ust", "Efekt naturalny, dokładnie taki, jakiego chciałam. Czułam się zaopiekowana na każdym etapie."],
  ["Marta W.", "mezoterapia", "Profesjonalizm i spokój. Lekarz wszystko wytłumaczył, żadnej presji na dodatkowe zabiegi."],
  ["Joanna R.", "konsultacja", "Rezerwacja online zajęła minutę, a klinika robi wrażenie od progu. Polecam z całego serca."],
];

export default function Home() {
  return (
    <main>
      <div className="bg-charcoal py-2 text-center text-[11px] uppercase tracking-[.2em] text-ivory">
        Projekt demonstracyjny · Plex - projektowanie stron dla klinik
      </div>

      <header className="sticky top-0 z-30 border-b border-sand bg-ivory/85 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-serif text-2xl tracking-wide">
            Lumee<span className="text-taupe">.</span>
          </a>
          <div className="hidden items-center gap-9 text-sm text-stone md:flex">
            <a href="#zabiegi" className="link-underline">Zabiegi</a>
            <a href="#klinika" className="link-underline">O klinice</a>
            <a href="#opinie" className="link-underline">Opinie</a>
            <a href="#kontakt" className="link-underline">Kontakt</a>
          </div>
          <a href="#rezerwacja" className="rounded-full bg-charcoal px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-bronze">
            Umów wizytę
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
        <div>
          <p className="eyebrow mb-6 text-taupe">Medycyna estetyczna · Warszawa</p>
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] md:text-6xl">
            Naturalne piękno,<br />medyczna precyzja.
          </h1>
          <p className="mb-9 max-w-md text-lg leading-relaxed text-stone">
            Indywidualne terapie estetyczne prowadzone przez certyfikowanych lekarzy. Subtelne efekty, które podkreślają to, co naturalne.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#rezerwacja" className="rounded-full bg-charcoal px-7 py-3.5 text-sm text-ivory transition-colors hover:bg-bronze">
              Umów wizytę online
            </a>
            <a href="#zabiegi" className="rounded-full border border-taupe/40 px-7 py-3.5 text-sm text-charcoal transition-colors hover:border-taupe">
              Poznaj zabiegi
            </a>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-sand shadow-sm md:h-[520px]">
          <Image src="/assets/clinic-lumee/hero-treatment-room.webp" alt="Elegancki gabinet zabiegowy kliniki Lumee" fill priority className="object-cover" />
        </div>
      </section>

      <section className="border-y border-sand bg-sand/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {["12+|lat doświadczenia", "8 000+|zadowolonych pacjentów", "100%|certyfikowani lekarze", "4,9|średnia ocen Google"].map((item) => {
            const [value, label] = item.split("|");
            return <div key={item}><div className="font-serif text-4xl text-bronze">{value}</div><p className="mt-1 text-xs tracking-wide text-stone">{label}</p></div>;
          })}
        </div>
      </section>

      <section id="zabiegi" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-4 text-taupe">Nasze zabiegi</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Kompleksowa opieka estetyczna</h2>
        </div>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map(([title, copy]) => (
            <article key={title}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-sand text-bronze">+</div>
              <h3 className="mb-2 font-serif text-2xl">{title}</h3>
              <p className="text-sm leading-relaxed text-stone">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="klinika" className="border-y border-sand bg-sand/40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div className="relative order-2 h-[380px] overflow-hidden rounded-[28px] bg-sand md:order-1 md:h-[460px]">
            <Image src="/assets/clinic-lumee/consultation-team.webp" alt="Lekarze kliniki Lumee podczas konsultacji" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow mb-4 text-taupe">O klinice Lumee</p>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">Estetyka oparta na medycznej wiedzy</h2>
            <p className="mb-8 leading-relaxed text-stone">
              Wierzymy, że najlepszy efekt to ten niewidoczny na pierwszy rzut oka - zauważalny jako świeżość, nie jako zabieg.
            </p>
            <ul className="space-y-4 text-sm text-charcoal">
              {["Lekarze z certyfikatami i wieloletnią praktyką", "Oryginalne, certyfikowane preparaty", "Bezpieczeństwo i higiena na poziomie medycznym", "Indywidualne plany terapii, bez presji"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-bronze">-</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="rezerwacja" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4 text-taupe">Rezerwacja online</p>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">Umów wizytę w kilka chwil</h2>
            <p className="mb-6 leading-relaxed text-stone">Wybierz zabieg i dogodny termin - potwierdzenie otrzymasz natychmiast SMS-em i e-mailem.</p>
            <div className="flex items-center gap-3 text-sm text-stone"><span className="text-bronze">●</span> Dostępne terminy także w weekendy</div>
          </div>
          <BookingWidget />
        </div>
      </section>

      <section id="opinie" className="border-y border-sand bg-sand/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow mb-4 text-center text-taupe">Opinie pacjentów</p>
          <h2 className="mb-16 text-center font-serif text-4xl leading-tight md:text-5xl">Zaufały nam tysiące osób</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map(([name, service, quote]) => (
              <figure key={name} className="rounded-[20px] border border-sand bg-white p-8">
                <div className="mb-4 text-bronze">★★★★★</div>
                <blockquote className="mb-6 font-serif text-xl leading-relaxed">„{quote}”</blockquote>
                <figcaption className="text-sm text-stone">{name} · {service}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4 text-taupe">Kontakt</p>
          <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">Zapraszamy do Lumee</h2>
          <div className="space-y-5 text-sm">
            <p className="flex gap-3"><span className="w-20 shrink-0 text-bronze">Adres</span><span>Warszawa · adres demonstracyjny</span></p>
            <p className="flex gap-3"><span className="w-20 shrink-0 text-bronze">Telefon</span><span>+48 22 000 00 00</span></p>
            <p className="flex gap-3"><span className="w-20 shrink-0 text-bronze">E-mail</span><span>recepcja@lumee-klinika.pl</span></p>
            <p className="flex gap-3"><span className="w-20 shrink-0 text-bronze">Godziny</span><span>Pn-Pt 9:00-20:00 · Sob 10:00-16:00</span></p>
          </div>
          <a href="#rezerwacja" className="mt-9 inline-block rounded-full bg-charcoal px-7 py-3.5 text-sm text-ivory transition-colors hover:bg-bronze">Umów wizytę online</a>
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[28px] border border-sand bg-sand">
          <iframe title="Mapa lokalizacji kliniki Lumee" src="https://www.google.com/maps?q=Warszawa%2C%20Polska&output=embed" className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <footer className="bg-charcoal text-ivory/80">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-14 md:flex-row">
          <div>
            <div className="mb-3 font-serif text-2xl text-ivory">Lumee<span className="text-taupe">.</span></div>
            <p className="max-w-xs text-sm text-ivory/60">Klinika medycyny estetycznej. Naturalne piękno, medyczna precyzja.</p>
          </div>
          <div className="text-sm text-ivory/60">Projekt demonstracyjny · Plex</div>
        </div>
      </footer>
    </main>
  );
}
