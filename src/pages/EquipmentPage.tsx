import { RefreshCw, Plus, CheckCircle, AlertCircle, XCircle, Zap, Activity, Eye } from 'lucide-react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { equipmentList, equipmentPerformance } from '../data/mockData';

export default function EquipmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý thiết bị</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <RefreshCw size={18} />
            <span>Làm mới</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus size={18} />
            <span>Thêm thiết bị</span>
          </button>
        </div>
      </div>

      {/* Equipment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-emerald-400" size={20} />
            <span className="text-slate-400 text-sm">Hoạt động</span>
          </div>
          <p className="text-3xl font-bold text-white">12</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="text-amber-400" size={20} />
            <span className="text-slate-400 text-sm">Bảo trì</span>
          </div>
          <p className="text-3xl font-bold text-white">2</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <XCircle className="text-slate-400" size={20} />
            <span className="text-slate-400 text-sm">Không hoạt động</span>
          </div>
          <p className="text-3xl font-bold text-white">3</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-blue-400" size={20} />
            <span className="text-slate-400 text-sm">Hiệu suất TB</span>
          </div>
          <p className="text-3xl font-bold text-white">88.7%</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="text-purple-400" size={20} />
            <span className="text-slate-400 text-sm">Sử dụng TB</span>
          </div>
          <p className="text-3xl font-bold text-white">76.3%</p>
        </div>
      </div>

      {/* Equipment Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Hiệu suất theo loại thiết bị</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={equipmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="category" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
              <Legend />
              <Bar dataKey="efficiency" fill="#3b82f6" name="Hiệu suất" radius={[8, 8, 0, 0]} />
              <Bar dataKey="utilization" fill="#10b981" name="Sử dụng" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Lịch bảo trì sắp tới</h3>
          <div className="space-y-3">
            {equipmentList.filter(eq => eq.status === 'maintenance' || new Date(eq.nextService) <= new Date(Date.now() + 15*24*60*60*1000)).map((eq, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                <div>
                  <p className="text-white font-semibold">{eq.name}</p>
                  <p className="text-slate-400 text-sm">{eq.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-amber-400 font-medium text-sm">{eq.nextService}</p>
                  <p className="text-slate-500 text-xs">Bảo trì định kỳ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Danh sách thiết bị</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã TB</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Tên thiết bị</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Loại</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Công suất</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Trạng thái</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Sử dụng</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Vị trí</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Người vận hành</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {equipmentList.map((eq, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-slate-300 font-mono text-sm">{eq.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-semibold">{eq.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{eq.type}</td>
                  <td className="px-6 py-4 text-slate-300">{eq.capacity}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      eq.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                      eq.status === 'maintenance' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {eq.status === 'active' ? <CheckCircle size={12} /> :
                       eq.status === 'maintenance' ? <AlertCircle size={12} /> :
                       <XCircle size={12} />}
                      {eq.status === 'active' ? 'Hoạt động' :
                       eq.status === 'maintenance' ? 'Bảo trì' :
                       'Không hoạt động'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-blue-500 to-emerald-500"
                          style={{ width: `${eq.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm">{eq.utilization}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{eq.location}</td>
                  <td className="px-6 py-4 text-slate-300">{eq.operator}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}