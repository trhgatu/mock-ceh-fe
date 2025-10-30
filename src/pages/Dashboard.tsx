import { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Ship, Package, Activity, Anchor, Truck, Warehouse, Users, DollarSign, Zap, Bell, Settings, Menu, X, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications] = useState(3);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Dữ liệu thống kê tổng quan với animation
  const stats = [
    {
      title: 'Tổng lượng hàng',
      value: '24,850',
      unit: 'tấn',
      change: '+12.5%',
      trend: 'up',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400'
    },
    {
      title: 'Tàu đang xử lý',
      value: '8',
      unit: 'tàu',
      change: '+2',
      trend: 'up',
      icon: Ship,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400'
    },
    {
      title: 'Doanh thu hôm nay',
      value: '₫2.4B',
      unit: '',
      change: '+18.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400'
    },
    {
      title: 'Hiệu suất',
      value: '94.2',
      unit: '%',
      change: '+5.3%',
      trend: 'up',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400'
    }
  ];

  // Dữ liệu realtime
  const realtimeData = [
    { time: '10:00', value: 450 },
    { time: '10:15', value: 520 },
    { time: '10:30', value: 480 },
    { time: '10:45', value: 610 },
    { time: '11:00', value: 590 },
    { time: '11:15', value: 720 },
    { time: '11:30', value: 680 }
  ];

  // Dữ liệu theo tháng
  const monthlyData = [
    { month: 'T1', import: 45000, export: 38000, revenue: 12.5 },
    { month: 'T2', import: 52000, export: 41000, revenue: 14.2 },
    { month: 'T3', import: 48000, export: 45000, revenue: 13.8 },
    { month: 'T4', import: 61000, export: 52000, revenue: 16.5 },
    { month: 'T5', import: 58000, export: 48000, revenue: 15.3 },
    { month: 'T6', import: 65000, export: 55000, revenue: 17.8 }
  ];

  // Dữ liệu loại hàng với gradients
  const cargoTypes = [
    { name: 'Than', value: 8500, color: '#3b82f6', percentage: 34 },
    { name: 'Quặng sắt', value: 6200, color: '#10b981', percentage: 25 },
    { name: 'Ngũ cốc', value: 5100, color: '#f59e0b', percentage: 20 },
    { name: 'Phân bón', value: 3200, color: '#8b5cf6', percentage: 13 },
    { name: 'Xi măng', value: 1850, color: '#ec4899', percentage: 8 }
  ];

  // Dữ liệu cảng/bến
  const berthStatus = [
    { berth: 'Bến A1', vessel: 'MV OCEAN STAR', status: 'active', cargo: 'Than', progress: 75, eta: '14:30' },
    { berth: 'Bến A2', vessel: 'MV PACIFIC GLORY', status: 'active', cargo: 'Quặng', progress: 45, eta: '16:00' },
    { berth: 'Bến A3', vessel: 'MV SUNRISE', status: 'active', cargo: 'Ngũ cốc', progress: 90, eta: '12:45' },
    { berth: 'Bến B1', vessel: 'Trống', status: 'idle', cargo: '-', progress: 0, eta: '-' },
    { berth: 'Bến B2', vessel: 'MV DRAGON WAVE', status: 'maintenance', cargo: 'Bảo trì', progress: 0, eta: '18:00' },
  ];

  // Dữ liệu hiệu suất thiết bị
  const equipmentPerformance = [
    { category: 'Cẩu trục', efficiency: 92, maintenance: 85, safety: 95, utilization: 88 },
    { category: 'Băng tải', efficiency: 88, maintenance: 90, safety: 92, utilization: 85 },
    { category: 'Xe tải', efficiency: 85, maintenance: 82, safety: 90, utilization: 92 },
    { category: 'Máy xúc', efficiency: 90, maintenance: 88, safety: 93, utilization: 86 }
  ];

  // Menu items
  const menuItems = [
    { id: 'overview', name: 'Tổng quan', icon: Activity },
    { id: 'vessels', name: 'Tàu thuyền', icon: Ship },
    { id: 'cargo', name: 'Hàng hóa', icon: Package },
    { id: 'equipment', name: 'Thiết bị', icon: Truck },
    { id: 'warehouse', name: 'Kho bãi', icon: Warehouse },
    { id: 'staff', name: 'Nhân sự', icon: Users }
  ];

  // Notifications
  const notificationList = [
    { type: 'success', message: 'MV SUNRISE hoàn thành xếp hàng', time: '5 phút trước' },
    { type: 'warning', message: 'Bến B2 cần bảo trì định kỳ', time: '15 phút trước' },
    { type: 'info', message: 'MV GOLDEN BRIDGE cập cảng lúc 14:00', time: '30 phút trước' }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 relative z-10 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Anchor className="text-white" size={24} />
            </div>
            {sidebarOpen && (
              <div>
                <h2 className="text-white font-bold text-lg">GTOS</h2>
                <p className="text-slate-400 text-xs">Terminal System</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-4 border-t border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative z-10">
        {/* Top Bar */}
        <div className="sticky top-0 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-8 py-4 z-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard Quản Lý Cầu Bến</h1>
              <p className="text-slate-400 text-sm mt-1">
                {currentTime.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Time */}
              <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-white tabular-nums">
                  {currentTime.toLocaleTimeString('vi-VN')}
                </div>
              </div>

              {/* Notifications */}
              <button className="relative p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Settings */}
              <button className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                      <stat.icon className={stat.textColor} size={24} />
                    </div>
                    <div className="flex items-center gap-1">
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="text-emerald-400" size={16} />
                      ) : (
                        <ArrowDownRight className="text-red-400" size={16} />
                      )}
                      <span className={`text-sm font-bold ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm mb-2">{stat.title}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      {stat.unit && <span className="text-slate-400 font-medium">{stat.unit}</span>}
                    </div>
                  </div>

                  {/* Mini sparkline */}
                  <div className="mt-4 h-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={realtimeData.slice(-5)}>
                        <defs>
                          <linearGradient id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={stat.textColor.replace('text-', '#')} stopOpacity={0.3}/>
                            <stop offset="95%" stopColor={stat.textColor.replace('text-', '#')} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke={stat.textColor.replace('text-', '#')} fill={`url(#gradient-${idx})`} strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Trend */}
            <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Xu hướng 6 tháng</h3>
                  <p className="text-slate-400 text-sm mt-1">Nhập khẩu, Xuất khẩu & Doanh thu</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">6 tháng</button>
                  <button className="px-3 py-1 text-slate-400 hover:bg-slate-700/50 rounded-lg text-sm font-medium">1 năm</button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorImport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorExport" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                    labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="import" stroke="#3b82f6" fillOpacity={1} fill="url(#colorImport)" name="Nhập khẩu (tấn)" strokeWidth={2} />
                  <Area type="monotone" dataKey="export" stroke="#10b981" fillOpacity={1} fill="url(#colorExport)" name="Xuất khẩu (tấn)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Cargo Distribution */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Phân loại hàng hóa</h3>
              <div className="space-y-4">
                {cargoTypes.map((cargo, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">{cargo.name}</span>
                      <span className="text-white font-bold">{cargo.value.toLocaleString()} tấn</span>
                    </div>
                    <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 group-hover:shadow-lg"
                        style={{
                          width: `${cargo.percentage}%`,
                          backgroundColor: cargo.color,
                          boxShadow: `0 0 20px ${cargo.color}40`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Berth Status */}
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Trạng thái bến cảng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {berthStatus.map((berth, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                    berth.status === 'active' ? 'border-emerald-500 bg-emerald-500/10' :
                    berth.status === 'idle' ? 'border-slate-600 bg-slate-800/50' :
                    'border-amber-500 bg-amber-500/10'
                  }`}
                >
                  {/* Status indicator */}
                  <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                    berth.status === 'active' ? 'bg-emerald-500 animate-pulse' :
                    berth.status === 'idle' ? 'bg-slate-500' :
                    'bg-amber-500 animate-pulse'
                  }`}></div>

                  <div className="mb-3">
                    <h4 className="text-white font-bold text-lg">{berth.berth}</h4>
                    <p className="text-slate-400 text-sm">{berth.vessel}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Hàng hóa:</span>
                      <span className="text-white font-medium">{berth.cargo}</span>
                    </div>
                    {berth.status === 'active' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-slate-400">ETA:</span>
                          <span className="text-white font-medium">{berth.eta}</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Tiến độ</span>
                            <span className="text-white font-bold">{berth.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                              style={{ width: `${berth.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Performance Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Hiệu suất thiết bị</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={equipmentPerformance}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                  <Radar name="Hiệu suất" dataKey="efficiency" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar name="Bảo trì" dataKey="maintenance" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Radar name="An toàn" dataKey="safety" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activities */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Hoạt động gần đây</h3>
              <div className="space-y-4">
                {notificationList.map((notif, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all">
                    <div className={`w-2 h-2 mt-2 rounded-full ${
                      notif.type === 'success' ? 'bg-emerald-500' :
                      notif.type === 'warning' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{notif.message}</p>
                      <p className="text-slate-400 text-sm mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
