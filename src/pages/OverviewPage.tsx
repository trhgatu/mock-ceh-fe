import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Package, Ship, DollarSign, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { stats, realtimeData, monthlyData, cargoTypes, berthStatus, equipmentPerformance, notificationList } from '../data/mockData';

export default function OverviewPage() {
  // Chuyển đổi dữ liệu equipmentPerformance thành dạng phù hợp cho PieChart
  const equipmentChartData = equipmentPerformance.map(item => ({
    name: item.category,
    value: item.efficiency
  }));

  // Màu sắc cho từng phần của biểu đồ tròn
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.title === 'Tổng lượng hàng' ? Package :
                              stat.title === 'Tàu đang xử lý' ? Ship :
                              stat.title === 'Doanh thu hôm nay' ? DollarSign : Zap;

          return (
            <div
              key={idx}
              className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <IconComponent className={stat.textColor} size={24} />
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

                <div className="mt-4 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={realtimeData.slice(-5)}>
                      <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Xu hướng 6 tháng</h3>
              <p className="text-slate-400 text-sm mt-1">Nhập khẩu, Xuất khẩu & Doanh thu</p>
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
              />
              <Legend />
              <Area type="monotone" dataKey="import" stroke="#3b82f6" fillOpacity={1} fill="url(#colorImport)" name="Nhập khẩu (tấn)" strokeWidth={2} />
              <Area type="monotone" dataKey="export" stroke="#10b981" fillOpacity={1} fill="url(#colorExport)" name="Xuất khẩu (tấn)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

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
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                    style={{
                      width: `${cargo.percentage}%`,
                      backgroundColor: cargo.color
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
                          className="h-full bg-linear-to-r from-emerald-500 to-blue-500 transition-all duration-500"
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

      {/* Equipment & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Hiệu suất thiết bị</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={equipmentChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {equipmentChartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                  }}
                  formatter={(value) => [`${value}%`, 'Hiệu suất']}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ color: '#94a3b8' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

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
  );
}