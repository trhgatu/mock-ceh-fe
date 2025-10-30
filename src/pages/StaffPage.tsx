import { useState } from 'react';
import { Calendar, XCircle, CheckCircle, Users, Clock, Truck } from 'lucide-react';
import { staffData } from '../data/mockData';

export default function StaffPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredStaff = selectedDepartment
    ? staffData.filter(staff => staff.department === selectedDepartment)
    : staffData;

  const showEquipmentColumn = selectedDepartment === 'Tally';

  const departments = [
    { dept: 'Đội cơ giới', count: 58, color: '#3b82f6' },
    { dept: 'Đội kho hàng', count: 32, color: '#10b981' },
    { dept: 'Đội bảo vệ', count: 25, color: '#f59e0b' },
    { dept: 'Tally', count: 28, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Quản lý nhân sự</h2>
          {selectedDepartment && (
            <p className="text-slate-400 text-sm mt-1">
              Đang hiển thị: {selectedDepartment}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {selectedDepartment && (
            <button
              onClick={() => setSelectedDepartment(null)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-amber-500 transition-all"
            >
              <XCircle size={18} />
              <span>Xóa bộ lọc</span>
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Calendar size={18} />
            <span>Lịch làm việc</span>
          </button>
        </div>
      </div>

      {/* Staff Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-blue-400" size={24} />
            <span className="text-slate-400 text-sm">Tổng nhân viên</span>
          </div>
          <p className="text-3xl font-bold text-white">143</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="text-emerald-400" size={24} />
            <span className="text-slate-400 text-sm">Đang làm việc</span>
          </div>
          <p className="text-3xl font-bold text-white">134</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <XCircle className="text-amber-400" size={24} />
            <span className="text-slate-400 text-sm">Vắng mặt</span>
          </div>
          <p className="text-3xl font-bold text-white">9</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-purple-400" size={24} />
            <span className="text-slate-400 text-sm">Ca hiện tại</span>
          </div>
          <p className="text-3xl font-bold text-white">Ca 2</p>
        </div>
      </div>

      {/* Department Filter */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Chọn bộ phận để xem chi tiết</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {departments.map((dept, idx) => {
            const isSelected = selectedDepartment === dept.dept;
            const percentage = Math.round((dept.count / 143) * 100);

            return (
              <div
                key={idx}
                onClick={() => setSelectedDepartment(dept.dept)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-500/20 border-2 border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/50 border-2 border-transparent hover:bg-slate-800/70 hover:border-slate-600'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className={`font-bold text-base ${isSelected ? 'text-blue-400' : 'text-white'}`}>
                      {dept.dept}
                    </span>
                    {isSelected && (
                      <CheckCircle className="text-blue-400" size={16} />
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold ${isSelected ? 'text-blue-300' : 'text-white'}`}>
                      {dept.count}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
                      nhân viên
                    </span>
                  </div>
                  <span className={`text-xs ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
                    {percentage}% tổng số
                  </span>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full transition-all ${
                        isSelected
                          ? 'bg-linear-to-r from-blue-400 to-blue-600'
                          : ''
                      }`}
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: isSelected ? undefined : dept.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Staff List */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              {selectedDepartment ? `Danh sách nhân viên - ${selectedDepartment}` : 'Danh sách nhân viên'}
            </h3>
            <span className="text-slate-400 text-sm">
              {filteredStaff.length} nhân viên
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã NV</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Họ và tên</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Bộ phận</th>
                {showEquipmentColumn && (
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Thiết bị</th>
                )}
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Ca làm việc</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Trạng thái</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Liên hệ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredStaff.map((staff, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-slate-300 font-mono text-sm">{staff.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-semibold">{staff.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{staff.department}</td>
                  {showEquipmentColumn && (
                    <td className="px-6 py-4">
                      {staff.equipment ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                          <Truck size={12} />
                          {staff.equipment}
                        </span>
                      ) : (
                        <span className="text-slate-500 text-sm">-</span>
                      )}
                    </td>
                  )}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {staff.shift}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      staff.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/20 text-slate-400'
                    }`}>
                      {staff.status === 'active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {staff.status === 'active' ? 'Hoạt động' : 'Nghỉ'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-300 text-sm">
                      <div>{staff.phone}</div>
                      <div className="text-slate-500 text-xs">{staff.email}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto text-slate-600 mb-4" size={48} />
            <p className="text-slate-400">Không có nhân viên nào trong bộ phận này</p>
          </div>
        )}
      </div>
    </div>
  );
}