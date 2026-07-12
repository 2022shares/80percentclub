"use client";

import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  BarChart3, 
  Settings, 
  LogOut,
  MousePointerClick,
  IndianRupee,
  Percent,
  RefreshCw,
  Plus,
  Trash2,
  Edit3,
  Search,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

interface Deal {
  _id: string;
  title: string;
  platform: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  isActive: boolean;
  expiresAt?: string;
  createdAt: string;
  clicks?: number;
}

interface Stats {
  totalDeals: number;
  totalClicks: number;
  estimatedCommission: number;
  avgDiscount: number;
  platformBreakdown: Record<string, number>;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "deals" | "analytics" | "settings">("overview");
  const [deals, setDeals] = useState<Deal[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [dealsRes, statsRes] = await Promise.all([
        fetch("/api/admin/deals"),
        fetch("/api/admin/stats"),
      ]);
      const dealsData = await dealsRes.json();
      const statsData = await statsRes.json();
      
      if (dealsData.success) setDeals(dealsData.deals);
      if (statsData.success) setStats(statsData.stats);
    } catch (error) {
      console.error("Failed to fetch admin data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetch("/api/admin/refresh", { method: "POST" });
      await fetchData();
    } catch (error) {
      console.error("Refresh failed:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this deal?")) return;
    try {
      await fetch(`/api/admin/deals/${id}`, { method: "DELETE" });
      setDeals((prev) => prev.filter((d) => d._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = filterPlatform === "all" || deal.platform === filterPlatform;
    return matchesSearch && matchesPlatform;
  });

  const paginatedDeals = filteredDeals.slice((currentPage - 1) * 10, currentPage * 10);
  const totalPages = Math.ceil(filteredDeals.length / 10) || 1;

  const platforms = ["all", "amazon", "flipkart", "meesho", "myntra", "ajio", "reliance-digital", "croma", "bajaj-electronics"];
  const platformColors: Record<string, string> = {
    amazon: "#FF9900",
    flipkart: "#2874F0",
    meesho: "#F43397",
    myntra: "#EE5F73",
    ajio: "#2C4152",
    "reliance-digital": "#E31837",
    croma: "#00A8E1",
    "bajaj-electronics": "#0047BB",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-deal-red rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">80</span>
            </div>
            <div>
              <h1 className="font-bold text-white leading-tight">Admin</h1>
              <p className="text-xs text-slate-500">80PercentClub</p>
            </div>
          </div>

          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
            <NavItem icon={<ShoppingBag className="w-4 h-4" />} label="Deals" active={activeTab === "deals"} onClick={() => setActiveTab("deals")} />
            <NavItem icon={<BarChart3 className="w-4 h-4" />} label="Analytics" active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} />
            <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-8 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white capitalize">{activeTab}</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">admin@80percentclub.com</span>
              <div className="w-8 h-8 bg-deal-red rounded-full flex items-center justify-center text-sm font-bold">A</div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === "overview" && stats && (
            <OverviewTab stats={stats} onRefresh={handleRefresh} refreshing={refreshing} />
          )}
          {activeTab === "deals" && (
            <DealsTab
              deals={paginatedDeals}
              totalDeals={filteredDeals.length}
              loading={loading}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterPlatform={filterPlatform}
              onFilterChange={setFilterPlatform}
              platforms={platforms}
              platformColors={platformColors}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              onDelete={handleDelete}
            />
          )}
          {activeTab === "analytics" && <AnalyticsTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active ? "bg-deal-red/10 text-deal-red border border-deal-red/20" : "text-slate-400 hover:text-white hover:bg-slate-800"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function OverviewTab({ stats, onRefresh, refreshing }: { stats: Stats; onRefresh: () => void; refreshing: boolean }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={<ShoppingBag className="w-5 h-5" />} label="Active Deals" value={stats.totalDeals.toString()} trend="+12" trendUp={true} />
        <StatCard icon={<MousePointerClick className="w-5 h-5" />} label="Total Clicks (30d)" value={stats.totalClicks >= 1000 ? `${(stats.totalClicks / 1000).toFixed(1)}K` : stats.totalClicks.toString()} trend="+23%" trendUp={true} />
        <StatCard icon={<IndianRupee className="w-5 h-5" />} label="Est. Commission" value={`Rs.${stats.estimatedCommission.toLocaleString()}`} trend="This month" trendUp={true} neutral={true} />
        <StatCard icon={<Percent className="w-5 h-5" />} label="Avg Discount" value={`${stats.avgDiscount.toFixed(1)}%`} trend="All platforms" trendUp={true} neutral={true} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Deals by Platform</h3>
            <button onClick={onRefresh} disabled={refreshing} className="flex items-center gap-2 px-4 py-2 bg-deal-red/10 text-deal-red rounded-lg text-sm font-medium hover:bg-deal-red/20 transition-colors disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh All"}
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(stats.platformBreakdown).map(([platform, count]) => {
              const total = Object.values(stats.platformBreakdown).reduce((a, b) => a + b, 0);
              const percentage = (count / total) * 100;
              const colors: Record<string, string> = { 
                amazon: "#FF9900", 
                flipkart: "#2874F0", 
                meesho: "#F43397", 
                myntra: "#EE5F73", 
                ajio: "#2C4152",
                "reliance-digital": "#E31837",
                croma: "#00A8E1",
                "bajaj-electronics": "#0047BB",
              };
              return (
                <div key={platform}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 capitalize font-medium">{platform.replace("-", " ")}</span>
                    <span className="text-slate-500">{count} deals</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%`, backgroundColor: colors[platform] || "#64748b" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickAction icon={<RefreshCw className="w-4 h-4" />} label="Refresh All Deals" color="bg-deal-red" />
            <QuickAction icon={<Plus className="w-4 h-4" />} label="Add Manual Deal" color="bg-blue-600" />
            <QuickAction icon={<Trash2 className="w-4 h-4" />} label="Purge Expired" color="bg-amber-600" />
            <QuickAction icon={<BarChart3 className="w-4 h-4" />} label="Export Report" color="bg-emerald-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend, trendUp, neutral }: { icon: React.ReactNode; label: string; value: string; trend: string; trendUp: boolean; neutral?: boolean }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-slate-400">{icon}</div>
        {!neutral && <span className={`text-xs font-medium px-2 py-1 rounded-full ${trendUp ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>{trend}</span>}
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
      {neutral && <p className="text-xs text-slate-600 mt-1">{trend}</p>}
    </div>
  );
}

function QuickAction({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <button className={`flex items-center gap-3 w-full px-4 py-3 bg-opacity-10 text-slate-300 rounded-lg hover:bg-opacity-20 transition-colors text-sm font-medium`} style={{ backgroundColor: color.replace("bg-", "").includes("red") ? "rgba(220,38,38,0.1)" : color.includes("blue") ? "rgba(37,99,235,0.1)" : color.includes("amber") ? "rgba(217,119,6,0.1)" : "rgba(5,150,105,0.1)" }}>
      <span className={`${color} text-white p-1.5 rounded-md`}>{icon}</span>
      {label}
    </button>
  );
}

function DealsTab({ deals, totalDeals, loading, searchQuery, onSearchChange, filterPlatform, onFilterChange, platforms, platformColors, currentPage, totalPages, onPageChange, onDelete }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search deals..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} className="pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 outline-none focus:border-deal-red w-64" />
          </div>
          <select value={filterPlatform} onChange={(e) => onFilterChange(e.target.value)} className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white outline-none focus:border-deal-red">
            {platforms.map((p: string) => (
              <option key={p} value={p} className="bg-slate-900">{p === "all" ? "All Platforms" : p.replace("-", " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}</option>
            ))}
          </select>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-deal-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Deal
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Platform</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Discount</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b border-slate-800/50"><td colSpan={6} className="px-6 py-4"><div className="h-10 bg-slate-800 rounded animate-pulse" /></td></tr>
              ))
            ) : deals.length === 0 ? (
              <tr><td colSpan={6} className="px-6 py-12 text-center text-slate-500">No deals found matching your criteria.</td></tr>
            ) : (
              deals.map((deal: Deal) => (
                <tr key={deal._id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-white line-clamp-1">{deal.title}</p>
                      <p className="text-xs text-slate-500 capitalize">{deal.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-semibold capitalize" style={{ color: platformColors[deal.platform] || "#64748b" }}>{deal.platform.replace("-", " ")}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-white">Rs.{deal.currentPrice.toLocaleString()}</p>
                    <p className="text-xs text-slate-500 line-through">Rs.{deal.originalPrice.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-deal-red/10 text-deal-red">{deal.discountPercentage.toFixed(0)}% OFF</span>
                  </td>
                  <td className="px-6 py-4"><StatusBadge isActive={deal.isActive} expiresAt={deal.expiresAt} /></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"><Edit3 className="w-4 h-4" /></button>
                      <button onClick={() => onDelete(deal._id)} className="p-2 text-slate-400 hover:text-deal-red hover:bg-deal-red/10 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800">
          <span className="text-sm text-slate-500">Showing {(currentPage - 1) * 10 + 1}-{Math.min(currentPage * 10, totalDeals)} of {totalDeals} deals</span>
          <div className="flex items-center gap-2">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 text-slate-400 hover:text-white disabled:opacity-30 rounded-lg hover:bg-slate-800 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => onPageChange(page)} className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === currentPage ? "bg-deal-red text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>{page}</button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 text-slate-400 hover:text-white disabled:opacity-30 rounded-lg hover:bg-slate-800 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ isActive, expiresAt }: { isActive: boolean; expiresAt?: string }) {
  if (!isActive) return <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><AlertCircle className="w-3.5 h-3.5" />Inactive</span>;
  if (expiresAt && new Date(expiresAt) < new Date(Date.now() + 24 * 60 * 60 * 1000)) return <span className="inline-flex items-center gap-1.5 text-xs text-amber-400"><Clock className="w-3.5 h-3.5" />Expiring Soon</span>;
  return <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5" />Active</span>;
}

function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
        <BarChart3 className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-white mb-2">Analytics Coming Soon</h3>
        <p className="text-slate-500 max-w-md mx-auto">Detailed click tracking, conversion rates, and revenue analytics will be available in the next update.</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Affiliate Settings</h3>
        <div className="space-y-4">
          {["Amazon", "Flipkart", "Meesho", "Myntra", "AJIO", "Reliance Digital", "Croma", "Bajaj Electronics"].map((platform) => (
            <div key={platform} className="flex items-center justify-between">
              <span className="text-sm text-slate-300">{platform} Affiliate Tag</span>
              <input type="text" placeholder={`Enter ${platform} tag`} className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white w-64 outline-none focus:border-deal-red" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Cron Configuration</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Auto-refresh Interval</span>
            <select className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white outline-none focus:border-deal-red">
              <option>Every hour</option>
              <option>Every 3 hours</option>
              <option>Every 6 hours</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Minimum Discount Threshold</span>
            <div className="flex items-center gap-2">
              <input type="number" defaultValue={80} className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white w-20 outline-none focus:border-deal-red text-center" />
              <span className="text-slate-500 text-sm">%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-deal-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Save Changes</button>
      </div>
    </div>
  );
}
