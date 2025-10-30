import  { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart } from 'recharts';
import { Ship, Package, TrendingUp, Clock, AlertCircle, Activity, Anchor, Truck, Warehouse, Users, DollarSign, Zap, MapPin, Bell, Settings, Menu, X, ChevronDown, ArrowUpRight, ArrowDownRight, Calendar, FileText, Search, Filter, Download, Upload, RefreshCw, Eye, Edit, Trash2, Plus, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Dữ liệu thống kê tổng quan
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

  // Dữ liệu loại hàng
  const cargoTypes = [
    { name: 'Than', value: 8500, color: '#3b82f6', percentage: 34 },
    { name: 'Quặng sắt', value: 6200, color: '#10b981', percentage: 25 },
    { name: 'Ngũ cốc', value: 5100, color: '#f59e0b', percentage: 20 },
    { name: 'Phân bón', value: 3200, color: '#8b5cf6', percentage: 13 },
    { name: 'Xi măng', value: 1850, color: '#ec4899', percentage: 8 }
  ];

  // Dữ liệu cảng/bến
  const berthStatus = [
    { berth: 'Bến A1', vessel: 'MV OCEAN STAR', status: 'active', cargo: 'Than', progress: 75, eta: '14:30', captain: 'Nguyễn Văn A', tonnage: 45000 },
    { berth: 'Bến A2', vessel: 'MV PACIFIC GLORY', status: 'active', cargo: 'Quặng', progress: 45, eta: '16:00', captain: 'Trần Văn B', tonnage: 38000 },
    { berth: 'Bến A3', vessel: 'MV SUNRISE', status: 'active', cargo: 'Ngũ cốc', progress: 90, eta: '12:45', captain: 'Lê Văn C', tonnage: 32000 },
    { berth: 'Bến B1', vessel: 'Trống', status: 'idle', cargo: '-', progress: 0, eta: '-', captain: '-', tonnage: 0 },
    { berth: 'Bến B2', vessel: 'MV DRAGON WAVE', status: 'maintenance', cargo: 'Bảo trì', progress: 0, eta: '18:00', captain: 'Phạm Văn D', tonnage: 0 },
  ];

  // Dữ liệu chi tiết tàu
  const vesselDetails = [
    {
      id: 'V001',
      name: 'MV OCEAN STAR',
      flag: '🇻🇳',
      type: 'Bulk Carrier',
      dwt: 45000,
      status: 'Loading',
      berth: 'A1',
      arrival: '2025-10-29 08:00',
      departure: '2025-10-30 14:30',
      cargo: 'Than đá',
      quantity: 35000,
      progress: 75,
      captain: 'Nguyễn Văn A',
      agent: 'Công ty TNHH Vận Tải Biển ABC'
    },
    {
      id: 'V002',
      name: 'MV PACIFIC GLORY',
      flag: '🇵🇦',
      type: 'Bulk Carrier',
      dwt: 38000,
      status: 'Loading',
      berth: 'A2',
      arrival: '2025-10-29 14:00',
      departure: '2025-10-30 16:00',
      cargo: 'Quặng sắt',
      quantity: 28000,
      progress: 45,
      captain: 'Trần Văn B',
      agent: 'Công ty CP Logistics XYZ'
    },
    {
      id: 'V003',
      name: 'MV SUNRISE',
      flag: '🇸🇬',
      type: 'General Cargo',
      dwt: 32000,
      status: 'Loading',
      berth: 'A3',
      arrival: '2025-10-29 06:00',
      departure: '2025-10-30 12:45',
      cargo: 'Ngũ cốc',
      quantity: 29000,
      progress: 90,
      captain: 'Lê Văn C',
      agent: 'Công ty TNHH Đại lý Tàu Biển DEF'
    },
    {
      id: 'V004',
      name: 'MV DRAGON WAVE',
      flag: '🇨🇳',
      type: 'Container Ship',
      dwt: 28000,
      status: 'Maintenance',
      berth: 'B2',
      arrival: '2025-10-28 10:00',
      departure: '2025-10-30 18:00',
      cargo: 'Bảo trì định kỳ',
      quantity: 0,
      progress: 0,
      captain: 'Phạm Văn D',
      agent: 'Công ty TNHH Dịch vụ Hàng Hải GHI'
    },
    {
      id: 'V005',
      name: 'MV GOLDEN BRIDGE',
      flag: '🇰🇷',
      type: 'Bulk Carrier',
      dwt: 52000,
      status: 'Waiting',
      berth: '-',
      arrival: '2025-10-30 14:00',
      departure: '2025-10-31 20:00',
      cargo: 'Xi măng',
      quantity: 42000,
      progress: 0,
      captain: 'Hoàng Văn E',
      agent: 'Công ty TNHH Vận Tải Quốc Tế JKL'
    }
  ];

  // Dữ liệu hàng hóa chi tiết
  const cargoInventory = [
    {
      id: 'C001',
      name: 'Than đá',
      category: 'Khoáng sản',
      quantity: 125000,
      unit: 'tấn',
      warehouse: 'Kho A1, A2, A3',
      value: '₫18.5B',
      status: 'In Stock',
      lastUpdate: '2025-10-30 10:00',
      origin: 'Indonesia',
      destination: 'Việt Nam'
    },
    {
      id: 'C002',
      name: 'Quặng sắt',
      category: 'Khoáng sản',
      quantity: 98000,
      unit: 'tấn',
      warehouse: 'Kho B1, B2',
      value: '₫15.2B',
      status: 'In Stock',
      lastUpdate: '2025-10-30 09:30',
      origin: 'Australia',
      destination: 'Việt Nam'
    },
    {
      id: 'C003',
      name: 'Ngũ cốc',
      category: 'Nông sản',
      quantity: 76000,
      unit: 'tấn',
      warehouse: 'Kho C1, C2',
      value: '₫12.8B',
      status: 'In Stock',
      lastUpdate: '2025-10-30 08:15',
      origin: 'USA',
      destination: 'Việt Nam'
    },
    {
      id: 'C004',
      name: 'Phân bón',
      category: 'Hóa chất',
      quantity: 54000,
      unit: 'tấn',
      warehouse: 'Kho D1',
      value: '₫8.9B',
      status: 'Low Stock',
      lastUpdate: '2025-10-29 16:00',
      origin: 'Việt Nam',
      destination: 'Thailand'
    },
    {
      id: 'C005',
      name: 'Xi măng',
      category: 'Vật liệu xây dựng',
      quantity: 42000,
      unit: 'tấn',
      warehouse: 'Kho E1, E2',
      value: '₫6.5B',
      status: 'In Stock',
      lastUpdate: '2025-10-30 07:00',
      origin: 'Việt Nam',
      destination: 'Cambodia'
    }
  ];

  // Dữ liệu thiết bị
  const equipmentList = [
    {
      id: 'EQ001',
      name: 'Cẩu trục 01',
      type: 'Gantry Crane',
      capacity: '50 tấn',
      status: 'active',
      utilization: 92,
      maintenance: 'OK',
      nextService: '2025-11-15',
      operator: 'Nguyễn Văn X',
      location: 'Bến A1'
    },
    {
      id: 'EQ002',
      name: 'Cẩu trục 02',
      type: 'Gantry Crane',
      capacity: '50 tấn',
      status: 'active',
      utilization: 88,
      maintenance: 'OK',
      nextService: '2025-11-20',
      operator: 'Trần Văn Y',
      location: 'Bến A2'
    },
    {
      id: 'EQ003',
      name: 'Băng tải 01',
      type: 'Conveyor Belt',
      capacity: '1000 tấn/h',
      status: 'active',
      utilization: 85,
      maintenance: 'OK',
      nextService: '2025-12-01',
      operator: 'Lê Văn Z',
      location: 'Kho A'
    },
    {
      id: 'EQ004',
      name: 'Xe tải nặng 01',
      type: 'Heavy Truck',
      capacity: '40 tấn',
      status: 'maintenance',
      utilization: 0,
      maintenance: 'Scheduled',
      nextService: '2025-10-30',
      operator: '-',
      location: 'Xưởng bảo trì'
    },
    {
      id: 'EQ005',
      name: 'Máy xúc 01',
      type: 'Excavator',
      capacity: '5 m³',
      status: 'active',
      utilization: 90,
      maintenance: 'OK',
      nextService: '2025-11-10',
      operator: 'Phạm Văn W',
      location: 'Kho B'
    },
    {
      id: 'EQ006',
      name: 'Xe nâng 01',
      type: 'Forklift',
      capacity: '10 tấn',
      status: 'idle',
      utilization: 45,
      maintenance: 'OK',
      nextService: '2025-11-25',
      operator: '-',
      location: 'Kho C'
    }
  ];

  // Dữ liệu kho bãi
  const warehouseData = [
    {
      id: 'WH001',
      name: 'Kho A1',
      type: 'Covered',
      capacity: 50000,
      occupied: 42000,
      available: 8000,
      utilization: 84,
      cargo: 'Than đá',
      zone: 'Zone A',
      status: 'active'
    },
    {
      id: 'WH002',
      name: 'Kho A2',
      type: 'Covered',
      capacity: 45000,
      occupied: 38000,
      available: 7000,
      utilization: 84,
      cargo: 'Than đá',
      zone: 'Zone A',
      status: 'active'
    },
    {
      id: 'WH003',
      name: 'Kho B1',
      type: 'Open Storage',
      capacity: 60000,
      occupied: 52000,
      available: 8000,
      utilization: 87,
      cargo: 'Quặng sắt',
      zone: 'Zone B',
      status: 'active'
    },
    {
      id: 'WH004',
      name: 'Kho C1',
      type: 'Silo',
      capacity: 40000,
      occupied: 35000,
      available: 5000,
      utilization: 88,
      cargo: 'Ngũ cốc',
      zone: 'Zone C',
      status: 'active'
    },
    {
      id: 'WH005',
      name: 'Kho D1',
      type: 'Covered',
      capacity: 35000,
      occupied: 18000,
      available: 17000,
      utilization: 51,
      cargo: 'Phân bón',
      zone: 'Zone D',
      status: 'low'
    },
    {
      id: 'WH006',
      name: 'Kho E1',
      type: 'Open Storage',
      capacity: 30000,
      occupied: 2000,
      available: 28000,
      utilization: 7,
      cargo: '-',
      zone: 'Zone E',
      status: 'idle'
    }
  ];

  // Dữ liệu nhân sự
  const staffData = [
    {
      id: 'ST001',
      name: 'Nguyễn Văn A',
      position: 'Giám đốc điều hành',
      department: 'Ban giám đốc',
      shift: 'Hành chính',
      status: 'active',
      phone: '0901234567',
      email: 'nva@gtos.com'
    },
    {
      id: 'ST002',
      name: 'Trần Thị B',
      position: 'Trưởng phòng Vận hành',
      department: 'Vận hành',
      shift: 'Hành chính',
      status: 'active',
      phone: '0901234568',
      email: 'ttb@gtos.com'
    },
    {
      id: 'ST003',
      name: 'Lê Văn C',
      position: 'Trưởng ca',
      department: 'Vận hành',
      shift: 'Ca 1',
      status: 'active',
      phone: '0901234569',
      email: 'lvc@gtos.com'
    },
    {
      id: 'ST004',
      name: 'Phạm Văn D',
      position: 'Vận hành cẩu trục',
      department: 'Vận hành',
      shift: 'Ca 1',
      status: 'active',
      phone: '0901234570',
      email: 'pvd@gtos.com'
    },
    {
      id: 'ST005',
      name: 'Hoàng Thị E',
      position: 'Kiểm soát hàng hóa',
      department: 'Kho bãi',
      shift: 'Ca 2',
      status: 'active',
      phone: '0901234571',
      email: 'hte@gtos.com'
    },
    {
      id: 'ST006',
      name: 'Võ Văn F',
      position: 'Bảo trì thiết bị',
      department: 'Kỹ thuật',
      shift: 'Ca 1',
      status: 'active',
      phone: '0901234572',
      email: 'vvf@gtos.com'
    }
  ];

  // Dữ liệu hiệu suất thiết bị
  const equipmentPerformance = [
    { category: 'Cẩu trục', efficiency: 92, maintenance: 85, safety: 95, utilization: 88 },
    { category: 'Băng tải', efficiency: 88, maintenance: 90, safety: 92, utilization: 85 },
    { category: 'Xe tải', efficiency: 85, maintenance: 82, safety: 90, utilization: 92 },
    { category: 'Máy xúc', efficiency: 90, maintenance: 88, safety: 93, utilization: 86 }
  ];

  // Dữ liệu ca làm việc
  const shiftData = [
    { shift: 'Ca 1 (6h-14h)', staff: 42, present: 40, absent: 2 },
    { shift: 'Ca 2 (14h-22h)', staff: 38, present: 36, absent: 2 },
    { shift: 'Ca 3 (22h-6h)', staff: 35, present: 32, absent: 3 },
    { shift: 'Hành chính', staff: 28, present: 26, absent: 2 }
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

  // Render các tab khác nhau
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'vessels':
        return renderVesselsTab();
      case 'cargo':
        return renderCargoTab();
      case 'equipment':
        return renderEquipmentTab();
      case 'warehouse':
        return renderWarehouseTab();
      case 'staff':
        return renderStaffTab();
      default:
        return renderOverviewTab();
    }
  };

  // Tab Tổng quan
  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
          >
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

              <div className="mt-4 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={realtimeData.slice(-5)}>
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ))}
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

      {/* Equipment & Activities */}
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
              <Legend />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
            </RadarChart>
          </ResponsiveContainer>
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

  // Tab Tàu thuyền
  const renderVesselsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý tàu thuyền</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Search size={18} />
            <span>Tìm kiếm</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Filter size={18} />
            <span>Lọc</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus size={18} />
            <span>Thêm tàu</span>
          </button>
        </div>
      </div>

      {/* Vessel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Đang hoạt động</span>
          </div>
          <p className="text-3xl font-bold text-white">8</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-sm">Chờ cập cảng</span>
          </div>
          <p className="text-3xl font-bold text-white">3</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-slate-400 text-sm">Bảo trì</span>
          </div>
          <p className="text-3xl font-bold text-white">1</p>
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
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã tàu</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Tên tàu</th>
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
                      vessel.status === 'Loading' ? 'bg-emerald-500/20 text-emerald-400' :
                      vessel.status === 'Waiting' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
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
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
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
                      <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700 transition-all">
                        <Edit size={16} />
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

  // Tab Hàng hóa
  const renderCargoTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý hàng hóa</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Download size={18} />
            <span>Xuất báo cáo</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus size={18} />
            <span>Nhập hàng</span>
          </button>
        </div>
      </div>

      {/* Cargo Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Tổng giá trị hàng hóa</h3>
          <p className="text-4xl font-bold text-blue-400">₫61.9B</p>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="url(#valueGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Phân loại theo danh mục</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={cargoTypes}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {cargoTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Thống kê nhanh</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Tổng tồn kho:</span>
              <span className="text-white font-bold">395,000 tấn</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Nhập tháng này:</span>
              <span className="text-emerald-400 font-bold">58,000 tấn</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Xuất tháng này:</span>
              <span className="text-blue-400 font-bold">49,000 tấn</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Đang xử lý:</span>
              <span className="text-amber-400 font-bold">24,850 tấn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cargo Inventory Table */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Danh sách hàng hóa</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã hàng</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Tên hàng</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Danh mục</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Số lượng</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Kho</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Giá trị</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Xuất xứ</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Trạng thái</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {cargoInventory.map((cargo, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-slate-300 font-mono text-sm">{cargo.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-semibold">{cargo.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{cargo.category}</td>
                  <td className="px-6 py-4">
                    <span className="text-white font-medium">{cargo.quantity.toLocaleString()} {cargo.unit}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{cargo.warehouse}</td>
                  <td className="px-6 py-4">
                    <span className="text-emerald-400 font-bold">{cargo.value}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{cargo.origin}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      cargo.status === 'In Stock' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {cargo.status === 'In Stock' ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                      {cargo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700 transition-all">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-all">
                        <Upload size={16} />
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

  // Tab Thiết bị
  const renderEquipmentTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý thiết bị</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <RefreshCw size={18} />
            <span>Làm mới</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
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
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
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
                      <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700 transition-all">
                        <Edit size={16} />
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

  // Tab Kho bãi
  const renderWarehouseTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý kho bãi</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <MapPin size={18} />
            <span>Xem sơ đồ</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus size={18} />
            <span>Thêm kho</span>
          </button>
        </div>
      </div>

      {/* Warehouse Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Warehouse className="text-blue-400" size={24} />
            <span className="text-slate-400 text-sm">Tổng dung tích</span>
          </div>
          <p className="text-3xl font-bold text-white">260,000</p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-emerald-400" size={24} />
            <span className="text-slate-400 text-sm">Đã sử dụng</span>
          </div>
          <p className="text-3xl font-bold text-white">187,000</p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-purple-400" size={24} />
            <span className="text-slate-400 text-sm">Còn trống</span>
          </div>
          <p className="text-3xl font-bold text-white">73,000</p>
          <p className="text-slate-500 text-sm mt-1">tấn</p>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-amber-400" size={24} />
            <span className="text-slate-400 text-sm">Tỷ lệ sử dụng</span>
          </div>
          <p className="text-3xl font-bold text-white">71.9%</p>
        </div>
      </div>

      {/* Warehouse Utilization Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Tỷ lệ sử dụng kho</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={warehouseData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
              <Bar dataKey="utilization" fill="#3b82f6" name="Tỷ lệ (%)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Phân bố theo zone</h3>
          <div className="space-y-4">
            {['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'].map((zone, idx) => {
              const zoneData = warehouseData.filter(w => w.zone === zone);
              const totalOccupied = zoneData.reduce((sum, w) => sum + w.occupied, 0);
              const totalCapacity = zoneData.reduce((sum, w) => sum + w.capacity, 0);
              const utilization = Math.round((totalOccupied / totalCapacity) * 100);

              return (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{zone}</span>
                    <span className="text-slate-400">{utilization}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: `${utilization}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-slate-500">{totalOccupied.toLocaleString()} tấn</span>
                    <span className="text-slate-500">{totalCapacity.toLocaleString()} tấn</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Warehouse Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouseData.map((wh, idx) => (
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
                    wh.utilization > 80 ? 'bg-gradient-to-r from-emerald-500 to-blue-500' :
                    wh.utilization > 50 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                    'bg-gradient-to-r from-slate-500 to-slate-600'
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
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700 transition-all">
                <Edit size={16} />
                <span className="text-sm">Sửa</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Tab Nhân sự
  const renderStaffTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quản lý nhân sự</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-blue-500 transition-all">
            <Calendar size={18} />
            <span>Lịch làm việc</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            <Plus size={18} />
            <span>Thêm nhân viên</span>
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

      {/* Shift Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Thống kê theo ca</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={shiftData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="shift" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
              <Legend />
              <Bar dataKey="present" fill="#10b981" name="Có mặt" radius={[8, 8, 0, 0]} />
              <Bar dataKey="absent" fill="#ef4444" name="Vắng mặt" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Phân bố theo bộ phận</h3>
          <div className="space-y-4">
            {[
              { dept: 'Vận hành', count: 58, color: '#3b82f6' },
              { dept: 'Kho bãi', count: 32, color: '#10b981' },
              { dept: 'Kỹ thuật', count: 25, color: '#f59e0b' },
              { dept: 'Ban giám đốc', count: 12, color: '#8b5cf6' },
              { dept: 'Hành chính', count: 16, color: '#ec4899' }
            ].map((dept, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{dept.dept}</span>
                    <span className="text-white font-bold">{dept.count}</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${(dept.count / 143) * 100}%`,
                        backgroundColor: dept.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staff List */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Danh sách nhân viên</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Mã NV</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Họ và tên</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Chức vụ</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Bộ phận</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Ca làm việc</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Trạng thái</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Liên hệ</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {staffData.map((staff, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-slate-300 font-mono text-sm">{staff.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-semibold">{staff.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{staff.position}</td>
                  <td className="px-6 py-4 text-slate-300">{staff.department}</td>
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
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700 transition-all">
                        <Edit size={16} />
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

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 relative z-10 flex flex-col`}>
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
              <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-white tabular-nums">
                  {currentTime.toLocaleTimeString('vi-VN')}
                </div>
              </div>

              <button className="relative p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>

              <button className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
