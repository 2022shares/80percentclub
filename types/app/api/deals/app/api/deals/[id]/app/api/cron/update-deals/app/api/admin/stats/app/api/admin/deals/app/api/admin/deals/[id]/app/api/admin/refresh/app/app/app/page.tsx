import { DealGrid } from "@/components/DealGrid";
import { Zap, TrendingDown, Clock, Shield, Truck, RotateCcw } from "lucide-react";

export const metadata = {
  title: "80PercentClub — 80%+ Off Deals from Amazon, Flipkart, Myntra & More",
  description: "Discover the biggest discounts on Amazon, Flipkart, Meesho, Myntra, AJIO, Reliance Digital, Croma, and Bajaj Electronics. Only deals with 80% off or higher. Updated hourly.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-deal-red rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">80</span>
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                  80% CLUB
                </h1>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                  ONLY 80%+ OFF DEALS
                </p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="/" className="text-deal-red">Deals</a>
              <a href="#categories" className="hover:text-deal-red transition-colors">Categories</a>
              <a href="#about" className="hover:text-deal-red transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live deals updated hourly
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              Massive Discounts from{" "}
              <span className="text-deal-red">India's Top Stores</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              We aggregate deals from Amazon, Flipkart, Myntra, AJIO, Reliance Digital, Croma & Bajaj Electronics — 
              filtering only those with <strong className="text-white">80% off or more</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                Verified Deals
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Truck className="w-4 h-4 text-blue-400" />
                Direct to Store
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <RotateCcw className="w-4 h-4 text-amber-400" />
                Hourly Refresh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-3 gap-4">
          <StatCard icon={<Zap className="w-5 h-5" />} label="Active Deals" value="64+" />
          <StatCard icon={<TrendingDown className="w-5 h-5" />} label="Avg Savings" value="₹15K+" />
          <StatCard icon={<Clock className="w-5 h-5" />} label="Updated" value="Hourly" />
        </div>
      </section>

      {/* Deals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <DealGrid />
      </section>

      {/* Trust Section */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Trusted Platforms</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["Amazon", "Flipkart", "Myntra", "AJIO", "Meesho", "Reliance Digital", "Croma", "Bajaj Electronics"].map((name) => (
              <span key={name} className="text-lg font-bold text-slate-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-deal-red rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">80</span>
            </div>
            <span className="text-white font-bold">80PercentClub</span>
          </div>
          <p className="text-sm mb-2">Deals updated every hour. Prices may change without notice.</p>
          <p className="text-xs opacity-60">
            This site contains affiliate links. We may earn a commission on qualifying purchases at no extra cost to you.
          </p>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 shadow-sm">
      <div className="text-deal-red">{icon}</div>
      <div>
        <p className="text-lg font-bold text-slate-900">{value}</p>
        <p className="text-xs text-slate-400">{label}</p>
      </div>
    </div>
  );
}
