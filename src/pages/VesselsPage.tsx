import { useState } from 'react';
import { Filter, Ship, Eye, X, Package, Truck, Weight, Container, Calendar } from 'lucide-react';
import { vesselDetails } from '../data/mockData';
import type { Vessel } from '../interface/vessel';

export default function VesselsPage() {
  const [selectedVessel, setSelectedVessel] = useState<Vessel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Date filter states
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [filteredVessels, setFilteredVessels] = useState<Vessel[]>(vesselDetails);

  const openModal = (vessel: Vessel): void => {
    setSelectedVessel(vessel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVessel(null);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const applyDateFilter = () => {
    if (!startDate && !endDate) {
      setFilteredVessels(vesselDetails);
      return;
    }

    const filtered = vesselDetails.filter((vessel) => {
      const arrivalDate = new Date(vessel.arrival);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return arrivalDate >= start && arrivalDate <= end;
      } else if (start) {
        return arrivalDate >= start;
      } else if (end) {
        return arrivalDate <= end;
      }
      return true;
    });

    setFilteredVessels(filtered);
    setIsFilterOpen(false);
  };

  const clearFilter = () => {
    setStartDate('');
    setEndDate('');
    setFilteredVessels(vesselDetails);
    setIsFilterOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý cầu bến</h2>
        <div className="flex gap-3 relative">
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all"
          >
            <Filter size={18} />
            <span>Lọc</span>
          </button>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div className="absolute top-12 right-0 z-40 bg-slate-800 border-2 border-slate-700 rounded-xl p-4 w-80 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Calendar size={18} className="text-blue-400" />
                  Lọc theo ngày
                </h3>
                <button onClick={toggleFilter} className="text-slate-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-slate-400 text-sm mb-1 block">Từ ngày</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-1 block">Đến ngày</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={clearFilter}
                    className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={applyDateFilter}
                    className="flex-1 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Vessel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Đang làm hàng</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {filteredVessels.filter(v => v.status === 'Đang làm hàng').length}
          </p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Đã cập bến</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {filteredVessels.filter(v => v.status === 'Đã cập bến').length}
          </p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Chưa cập bến</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {filteredVessels.filter(v => v.status === 'Chưa cập bến').length}
          </p>
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
              {filteredVessels.map((vessel, idx) => (
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
                      <button
                        onClick={() => openModal(vessel)}
                        className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all"
                      >
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

      {/* Modal Chi tiết */}
      {isModalOpen && selectedVessel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedVessel.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedVessel.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">Mã: {selectedVessel.id} • Bến: {selectedVessel.berth}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-700 rounded-lg transition-all"
              >
                <X className="text-slate-400" size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Thông tin cơ bản */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Loại tàu</p>
                  <p className="text-white font-semibold text-lg">{selectedVessel.type}</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">DWT</p>
                  <p className="text-white font-semibold text-lg">{selectedVessel.dwt.toLocaleString()} tấn</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Thời gian cập cảng</p>
                  <p className="text-white font-semibold text-lg">{selectedVessel.arrival}</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Thời gian rời cảng</p>
                  <p className="text-white font-semibold text-lg">{selectedVessel.departure}</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Thuyền trưởng</p>
                  <p className="text-white font-semibold text-lg">{selectedVessel.captain}</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Đại lý</p>
                  <p className="text-white font-semibold text-sm">{selectedVessel.agent}</p>
                </div>
              </div>

              {/* Trạng thái và tiến độ */}
              <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold text-lg">Trạng thái hiện tại</span>
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    selectedVessel.status === 'Đang làm hàng' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    selectedVessel.status === 'Đã cập bến' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    selectedVessel.status === 'Chưa cập bến' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                  }`}>
                    {selectedVessel.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Tiến độ xếp dỡ</span>
                    <span className="text-white font-bold">{selectedVessel.progress}%</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                      style={{ width: `${selectedVessel.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Chi tiết hàng hóa */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="text-blue-400" size={20} />
                  Chi tiết hàng hóa
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Container className="text-blue-400" size={18} />
                      <p className="text-slate-400 text-sm">Hầm 1</p>
                    </div>
                    <p className="text-white font-bold text-xl">5,200</p>
                    <p className="text-slate-400 text-xs mt-1">tấn</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Container className="text-emerald-400" size={18} />
                      <p className="text-slate-400 text-sm">Hầm 2</p>
                    </div>
                    <p className="text-white font-bold text-xl">4,800</p>
                    <p className="text-slate-400 text-xs mt-1">tấn</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="text-purple-400" size={18} />
                      <p className="text-slate-400 text-sm">Bãi</p>
                    </div>
                    <p className="text-white font-bold text-xl">8,500</p>
                    <p className="text-slate-400 text-xs mt-1">tấn</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Weight className="text-amber-400" size={18} />
                      <p className="text-slate-400 text-sm">Kiện</p>
                    </div>
                    <p className="text-white font-bold text-xl">1,250</p>
                    <p className="text-slate-400 text-xs mt-1">kiện</p>
                  </div>
                </div>
              </div>

              {/* Thông tin vận chuyển */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Truck className="text-emerald-400" size={20} />
                  Thông tin vận chuyển
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-2">Số xe</p>
                    <p className="text-white font-bold text-2xl">24</p>
                    <p className="text-slate-500 text-xs mt-1">xe đầu kéo</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-2">Loại hàng</p>
                    <p className="text-white font-semibold text-base">{selectedVessel.cargo}</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-2">Bãi chứa</p>
                    <p className="text-white font-bold text-xl">VCK2</p>
                    <p className="text-slate-500 text-xs mt-1">Kho chính</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-2">Tổng trọng lượng</p>
                    <p className="text-white font-bold text-xl">{selectedVessel.quantity.toLocaleString()}</p>
                    <p className="text-slate-500 text-xs mt-1">tấn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all"
              >
                Đóng
              </button>
              <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Xuất báo cáo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
