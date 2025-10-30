import { useState } from 'react';
import { MapPin, XCircle, CheckCircle, Warehouse as WarehouseIcon, Package, TrendingUp, Activity, Eye } from 'lucide-react';
import { warehouseData } from '../data/mockData';

export default function WarehousePage() {
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(null);

  // Filter warehouse data based on selected warehouse
  const filteredWarehouses = selectedWarehouse
    ? warehouseData.filter(wh => wh.name === selectedWarehouse)
    : warehouseData;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Quản lý kho bãi</h2>
          {selectedWarehouse && (
            <p className="text-slate-400 text-sm mt-1">
              Đang hiển thị: {selectedWarehouse}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {selectedWarehouse && (
            <button
              onClick={() => setSelectedWarehouse(null)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-amber-500 transition-all"
            >
              <XCircle size={18} />
              <span>Xóa bộ lọc</span>
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <MapPin size={18} />
            <span>Xem sơ đồ</span>
          </button>
        </div>
      </div>

      {/* Warehouse Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <WarehouseIcon className="text-blue-400" size={24} />
            <span className="text-slate-400 text-sm">Tổng dung tích</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {warehouseData.reduce((sum, wh) => sum + wh.capacity, 0).toLocaleString()}
          </p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-emerald-400" size={24} />
            <span className="text-slate-400 text-sm">Đã sử dụng</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {warehouseData.reduce((sum, wh) => sum + wh.occupied, 0).toLocaleString()}
          </p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-purple-400" size={24} />
            <span className="text-slate-400 text-sm">Còn trống</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {warehouseData.reduce((sum, wh) => sum + wh.available, 0).toLocaleString()}
          </p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-amber-400" size={24} />
            <span className="text-slate-400 text-sm">Tỷ lệ sử dụng</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {Math.round((warehouseData.reduce((sum, wh) => sum + wh.occupied, 0) /
              warehouseData.reduce((sum, wh) => sum + wh.capacity, 0)) * 100)}%
          </p>
        </div>
      </div>

      {/* Danh sách kho để filter */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Chọn kho để xem chi tiết</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {warehouseData.map((wh, idx) => {
            const isSelected = selectedWarehouse === wh.name;

            return (
              <div
                key={idx}
                onClick={() => setSelectedWarehouse(wh.name)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-500/20 border-2 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/50 border-2 border-transparent hover:bg-slate-800/70 hover:border-slate-600'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-lg ${isSelected ? 'text-blue-400' : 'text-white'}`}>
                      {wh.name}
                    </span>
                    {isSelected && (
                      <CheckCircle className="text-blue-400" size={16} />
                    )}
                  </div>
                  <span className={`text-xs ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
                    {wh.utilization}% sử dụng
                  </span>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full transition-all ${
                        isSelected
                          ? 'bg-linear-to-r from-blue-400 to-blue-600'
                          : wh.utilization > 80 ? 'bg-linear-to-r from-emerald-500 to-blue-500'
                          : wh.utilization > 50 ? 'bg-linear-to-r from-blue-500 to-purple-500'
                          : 'bg-linear-to-r from-slate-500 to-slate-600'
                      }`}
                      style={{ width: `${wh.utilization}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Warehouse Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">
            {selectedWarehouse ? `Chi tiết kho ${selectedWarehouse}` : 'Danh sách kho bãi'}
          </h3>
          <span className="text-slate-400 text-sm">
            {filteredWarehouses.length} kho
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWarehouses.map((wh, idx) => (
            <div
              key={idx}
              className={`bg-slate-800/30 backdrop-blur-xl border-2 rounded-2xl p-6 transition-all hover:scale-105 ${
                wh.status === 'active' ? 'border-emerald-500/50' :
                wh.status === 'low' ? 'border-amber-500/50' :
                'border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{wh.name}</h4>
                  <p className="text-slate-400 text-sm">{wh.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  wh.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                  wh.status === 'low' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  {wh.status === 'active' ? 'Hoạt động' :
                   wh.status === 'low' ? 'Ít hàng' :
                   'Trống'}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Dung tích:</span>
                  <span className="text-white font-medium">{wh.capacity.toLocaleString()} tấn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Đã dùng:</span>
                  <span className="text-emerald-400 font-medium">{wh.occupied.toLocaleString()} tấn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Còn trống:</span>
                  <span className="text-blue-400 font-medium">{wh.available.toLocaleString()} tấn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Hàng hóa:</span>
                  <span className="text-white font-medium">{wh.cargo}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sử dụng</span>
                  <span className="text-white font-bold">{wh.utilization}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      wh.utilization > 80 ? 'bg-linear-to-r from-emerald-500 to-blue-500' :
                      wh.utilization > 50 ? 'bg-linear-to-r from-blue-500 to-purple-500' :
                      'bg-linear-to-r from-slate-500 to-slate-600'
                    }`}
                    style={{ width: `${wh.utilization}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all">
                  <Eye size={16} />
                  <span className="text-sm">Chi tiết</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredWarehouses.length === 0 && (
          <div className="text-center py-12">
            <WarehouseIcon className="mx-auto text-slate-600 mb-4" size={48} />
            <p className="text-slate-400">Không có kho bãi nào</p>
          </div>
        )}
      </div>
    </div>
  );
}