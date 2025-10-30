import { Filter, Ship, Eye } from 'lucide-react';
import { vesselDetails } from '../data/mockData';

export default function VesselsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý cầu bến</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Filter size={18} />
            <span>Lọc</span>
          </button>
        </div>
      </div>

      {/* Vessel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Đang làm hàng</span>
          </div>
          <p className="text-3xl font-bold text-white">8</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Đã cập bến</span>
          </div>
          <p className="text-3xl font-bold text-white">3</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Chưa cập bến</span>
          </div>
          <p className="text-3xl font-bold text-white">5</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Ship className="text-slate-400" size={16} />
            <span className="text-slate-400 text-sm">Tổng tàu tháng này</span>
          </div>
          <p className="text-3xl font-bold text-white">45</p>
        </div>
      </div>

      {/* Vessel List */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã tàu/ Sà lan</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Tên tàu/ Sà lan</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Loại</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">DWT</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Trạng thái</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Bến</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Hàng hóa</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Tiến độ</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {vesselDetails.map((vessel, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-slate-300 font-mono text-sm">{vessel.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{vessel.flag}</span>
                      <span className="text-white font-semibold">{vessel.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{vessel.type}</td>
                  <td className="px-6 py-4 text-slate-300">{vessel.dwt.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      vessel.status === 'Đang làm hàng' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      vessel.status === 'Đã cập bến' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      vessel.status === 'Chưa cập bến' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      vessel.status === 'Đã rời' ? 'bg-slate-500/20 text-slate-400 border border-slate-500/30' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {vessel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{vessel.berth}</td>
                  <td className="px-6 py-4 text-slate-300">{vessel.cargo}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-blue-500 to-emerald-500"
                          style={{ width: `${vessel.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm font-medium">{vessel.progress}%</span>
                    </div>
                  </td>
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