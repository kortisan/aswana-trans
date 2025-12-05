import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Antar Jemput Bandara YIA",
    description:
      "Penjemputan tepat waktu dengan driver profesional dan monitor kedatangan pesawat real-time.",
  },
  {
    title: "Antar Jemput Dalam/Luar Kota",
    description:
      "Siap mengantar meeting, event keluarga, hingga perjalanan bisnis lintas provinsi dengan nyaman.",
  },
  {
    title: "Wisata Dalam/Luar Kota",
    description:
      "Nikmati trip customized lengkap dengan rekomendasi destinasi, kuliner, serta dokumentasi perjalanan.",
  },
];

const WHATSAPP_LINK = "https://wa.me/6282247776640";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,150,105,0.18),_transparent_50%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.14),_transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-semibold text-white shadow-lg shadow-emerald-600/30">
              AT
            </span>
            <div>
              <p className="text-base font-semibold tracking-[0.2em] text-emerald-700">
                Aswana Trans
              </p>
              <p className="text-sm text-slate-500">
                Solusi transport & wisata tepercaya
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a className="transition-colors hover:text-emerald-700" href="#">
              Layanan
            </a>
            <a className="transition-colors hover:text-emerald-700" href="#">
              Armada
            </a>
            <a className="transition-colors hover:text-emerald-700" href="#">
              Galeri
            </a>
            <a
              className="rounded-full bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </a>
          </nav>
        </header>

        <main className="mt-16 grid flex-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <section className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm shadow-emerald-100 ring-1 ring-emerald-100 backdrop-blur">
                Transport & wisata Yogyakarta
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                Nyaman antar jemput dan wisata dari Bandara YIA bersama Aswana
                Trans.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Driver ramah, armada bersih All New Avanza & Hiace Premio, serta
                fleksibilitas jadwal untuk kebutuhan keluarga, bisnis, maupun
                rombongan wisata. Tinggal kirim chat, perjalananmu siap diurus.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Chat Sekarang
              </a>
              <a className="rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-900">
                Unduh Brosur
              </a>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                Respon <span className="text-emerald-700">&lt; 5 menit</span>
              </p>
            </div>

            <dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                  Armada utama
                </dt>
                <dd className="mt-2 text-3xl font-semibold text-emerald-700">
                  2
                </dd>
                <p className="text-xs text-slate-500">
                  All New Avanza &amp; Hiace Premio
                </p>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                  Area layanan
                </dt>
                <dd className="mt-2 text-3xl font-semibold text-emerald-700">
                  3
                </dd>
                <p className="text-xs text-slate-500">
                  DIY, Jawa Tengah, Jabodetabek
                </p>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                  Dukungan pelanggan
                </dt>
                <dd className="mt-2 text-3xl font-semibold text-emerald-700">
                  24/7
                </dd>
                <p className="text-xs text-slate-500">
                  Tim standby sepanjang hari
                </p>
              </div>
            </dl>
          </section>

          <section className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-3xl bg-emerald-100 blur-2xl lg:block" />
            <div className="absolute -right-4 bottom-16 hidden h-28 w-28 rounded-full bg-emerald-200 blur-3xl lg:block" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-emerald-100 bg-white/90 shadow-xl shadow-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200"
                alt="Armada van putih Aswana Trans siap beroperasi"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative -bottom-16 ml-auto mr-6 w-60 max-w-[60%] rounded-[28px] border border-emerald-100 bg-white shadow-2xl shadow-emerald-100 sm:mr-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800"
                  alt="Interior kendaraan nyaman untuk perjalanan wisata"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 px-4 pb-5 pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-600">
                  Armada premium
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  All New Avanza untuk keluarga kecil, Hiace Premio untuk rombongan.
                </p>
              </div>
            </div>
          </section>
        </main>

        <section className="mt-24 grid gap-6 rounded-[32px] border border-emerald-100 bg-white/80 p-8 shadow-2xl shadow-emerald-100 backdrop-blur lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-emerald-900">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 flex flex-col items-start gap-6 rounded-[28px] border border-emerald-100 bg-gradient-to-r from-emerald-700 to-emerald-600 p-8 text-emerald-50 shadow-xl shadow-emerald-700/30 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
              Butuh penawaran cepat?
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Konsultasi rute, harga, dan ketersediaan armada dalam hitungan
              menit.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/80">
              Sampaikan titik jemput, tujuan, dan jumlah penumpang. Tim Aswana
              Trans siap merekomendasikan armada All New Avanza ataupun Hiace
              Premio sesuai kebutuhan perjalananmu.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-50"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Hubungi via WhatsApp
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400">
              0822-4777-6640
            </span>
          </a>
        </section>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-emerald-100 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Aswana Trans. Semua hak dilindungi.</p>
          <div className="flex items-center gap-6 font-medium text-slate-500">
            <a className="transition hover:text-emerald-700" href="#">
              Kebijakan Privasi
            </a>
            <a className="transition hover:text-emerald-700" href="#">
              Syarat & Ketentuan
            </a>
            <a
              className="inline-flex items-center gap-2 text-emerald-600 transition hover:text-emerald-800"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              WA 0822-4777-6640
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
