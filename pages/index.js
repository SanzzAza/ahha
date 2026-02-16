import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoodShort API — Unofficial Documentation</title>
        <meta name="description" content="Unofficial API docs for GoodShort drama streaming platform" />
      </Head>

      <div className="min-h-screen bg-[#0f1117] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Unofficial • v1.0.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-white">GoodShort</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              API Docs
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Dokumentasi API tidak resmi untuk platform streaming drama pendek{' '}
            <a href="https://www.goodshort.com" className="text-green-400 hover:underline">GoodShort</a>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link href="/docs" className="px-8 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow-lg shadow-green-600/25">
              📖 Read Docs
            </Link>
            <a href="/api/dramas" target="_blank" className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-gray-700 text-white font-medium transition">
              Try API →
            </a>
          </div>

          <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-gray-500 ml-2">Quick Example</span>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`curl https://your-app.vercel.app/api/dramas?genre=romansa-137-lakon

{
  "success": true,
  "data": [
    {
      "id": "31000888236",
      "title": "Mendadak Jadi Istri Miliuner",
      "tags": ["Kehamilan", "Manis", "CEO"]
    }
  ],
  "pagination": { "page": 1, "has_more": true }
}`}
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[
              { icon: '📂', title: '10 Categories', desc: 'Fantasi, Romansa, Thriller, dll' },
              { icon: '🏷️', title: '125+ Tags', desc: 'Theme, Character, Plot tags' },
              { icon: '📺', title: '6 Channels', desc: 'Trending, Terbaru, Eksklusif' },
            ].map((f, i) => (
              <div key={i} className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-4 text-left">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="font-semibold text-white mt-2">{f.title}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
