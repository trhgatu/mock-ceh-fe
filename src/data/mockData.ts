// Dữ liệu thống kê tổng quan
export const stats = [
  {
    title: 'Tổng lượng hàng',
    value: '24,850',
    unit: 'tấn',
    change: '+12.5%',
    trend: 'up',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400'
  },
  {
    title: 'Tàu đang xử lý',
    value: '3',
    unit: 'tàu',
    change: '+2',
    trend: 'up',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400'
  },
  {
    title: 'Doanh thu hôm nay',
    value: '₫10M',
    unit: '',
    change: '+18.7%',
    trend: 'up',
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
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400'
  }
];

// Dữ liệu realtime
export const realtimeData = [
  { time: '10:00', value: 450 },
  { time: '10:15', value: 520 },
  { time: '10:30', value: 480 },
  { time: '10:45', value: 610 },
  { time: '11:00', value: 590 },
  { time: '11:15', value: 720 },
  { time: '11:30', value: 680 }
];

// Dữ liệu theo tháng
export const monthlyData = [
  { month: 'T1', import: 45000, export: 38000, revenue: 12.5 },
  { month: 'T2', import: 52000, export: 41000, revenue: 14.2 },
  { month: 'T3', import: 48000, export: 45000, revenue: 13.8 },
  { month: 'T4', import: 61000, export: 52000, revenue: 16.5 },
  { month: 'T5', import: 58000, export: 48000, revenue: 15.3 },
  { month: 'T6', import: 65000, export: 55000, revenue: 17.8 }
];

// Dữ liệu loại hàng
export const cargoTypes = [
  { name: 'Cáp cuộn', value: 8500, color: '#3b82f6', percentage: 34 },
  { name: 'Băng nóng', value: 6200, color: '#10b981', percentage: 25 },
  { name: 'Tole nóng', value: 5100, color: '#f59e0b', percentage: 20 },
  { name: 'Tole mạ', value: 3200, color: '#8b5cf6', percentage: 13 },
  { name: 'Tole cuộn', value: 1850, color: '#ec4899', percentage: 8 }
];

// Dữ liệu cảng/bến
export const berthStatus = [
  { berth: 'Bến A1', vessel: 'MV OCEAN STAR', status: 'active', cargo: 'Than', progress: 90, eta: '14:30', captain: 'Nguyễn Văn A', tonnage: 45000 },
  { berth: 'Bến A2', vessel: 'MV PACIFIC GLORY', status: 'active', cargo: 'Quặng', progress: 75, eta: '16:00', captain: 'Trần Văn B', tonnage: 38000 },
  { berth: 'Bến A3', vessel: 'MV SUNRISE', status: 'active', cargo: 'Ngũ cốc', progress: 45, eta: '12:45', captain: 'Lê Văn C', tonnage: 32000 },
  { berth: 'Bến B1', vessel: 'Trống', status: 'idle', cargo: '-', progress: 0, eta: '-', captain: '-', tonnage: 0 },
  { berth: 'Bến B2', vessel: 'MV DRAGON WAVE', status: 'maintenance', cargo: 'Bảo trì', progress: 0, eta: '18:00', captain: 'Phạm Văn D', tonnage: 0 },
];

// Dữ liệu chi tiết tàu
export const vesselDetails = [
  {
    id: 'V001',
    name: 'MV OCEAN STAR',
    flag: '🇻🇳',
    type: 'Tàu bách hóa',
    dwt: 45000,
    status: 'Chưa cập bến',
    berth: 'A1',
    arrival: '2025-10-29 08:00',
    departure: '2025-10-30 14:30',
    cargo: 'Tole nóng, băng nóng',
    quantity: 35000,
    progress: 90,
    captain: 'Nguyễn Văn A',
    agent: 'Công ty TNHH Vận Tải Biển ABC',
    // Chi tiết hàng hóa
    hold1: 5200,      // Hầm 1 (tấn)
    hold2: 4800,      // Hầm 2 (tấn)
    yard: 8500,       // Bãi (tấn)
    packages: 1250,   // Kiện
    // Thông tin vận chuyển
    trucks: 24,       // Số xe
    warehouse: 'VCK2' // Bãi chứa
  },
  {
    id: 'V002',
    name: 'MV PACIFIC GLORY',
    flag: '🇵🇦',
    type: 'Tàu hàng lỏng',
    dwt: 38000,
    status: 'Đã cập bến',
    berth: 'A2',
    arrival: '2025-10-29 14:00',
    departure: '2025-10-30 16:00',
    cargo: 'Tole nóng, Cáp cuộn',
    quantity: 28000,
    progress: 75,
    captain: 'Trần Văn B',
    agent: 'Công ty CP Logistics XYZ',
    // Chi tiết hàng hóa
    hold1: 4500,
    hold2: 3800,
    yard: 6200,
    packages: 980,
    // Thông tin vận chuyển
    trucks: 18,
    warehouse: 'VCCDCT'
  },
  {
    id: 'V003',
    name: 'AG158',
    flag: '🇸🇬',
    type: 'Sà lan',
    dwt: 32000,
    status: 'Đang làm hàng',
    berth: 'A3',
    arrival: '2025-10-29 06:00',
    departure: '2025-10-30 12:45',
    cargo: 'Cáp cuộn, băng nóng',
    quantity: 29000,
    progress: 45,
    captain: 'Lê Văn C',
    agent: 'Công ty TNHH Đại lý Tàu Biển DEF',
    // Chi tiết hàng hóa
    hold1: 6200,
    hold2: 5800,
    yard: 7500,
    packages: 1150,
    // Thông tin vận chuyển
    trucks: 20,
    warehouse: 'SBBS'
  },
  {
    id: 'V004',
    name: 'MV DRAGON WAVE',
    flag: '🇨🇳',
    type: 'Tàu hàng lỏng',
    dwt: 28000,
    status: 'Đã rời',
    berth: 'B2',
    arrival: '2025-10-28 10:00',
    departure: '2025-10-30 18:00',
    cargo: 'Băng nóng, tole nóng',
    quantity: 0,
    progress: 0,
    captain: 'Phạm Văn D',
    agent: 'Công ty TNHH Dịch vụ Hàng Hải GHI',
    // Chi tiết hàng hóa
    hold1: 0,
    hold2: 0,
    yard: 0,
    packages: 0,
    // Thông tin vận chuyển
    trucks: 0,
    warehouse: '-'
  },
];

export const equipmentList = [
  {
    id: 'EQ001',
    name: 'TCM 10-1 <16T',
    type: 'Xe nâng bãi',
    capacity: '2.5 tấn',
    status: 'active',
    utilization: 92,
    maintenance: 'OK',
    nextService: '2025-11-15',
    operator: 'Nguyễn Văn X',
    location: 'Bến A1'
  },
  {
    id: 'EQ003',
    name: 'KO32-5 >20T',
    type: 'Xe nâng hầm',
    capacity: '2 tấn',
    status: 'active',
    utilization: 85,
    maintenance: 'OK',
    nextService: '2025-12-01',
    operator: 'Lê Văn Z',
    location: 'Kho A'
  },
  {
    id: 'EQ004',
    name: 'TB14',
    type: 'Xe đầu kéo',
    capacity: '2.5 tấn',
    status: 'maintenance',
    utilization: 0,
    maintenance: 'Scheduled',
    nextService: '2025-10-30',
    operator: '-',
    location: 'Xưởng bảo trì'
  },
  {
    id: 'EQ005',
    name: 'HS647',
    type: 'Rơ-moóc',
    capacity: '2 tấn',
    status: 'active',
    utilization: 90,
    maintenance: 'OK',
    nextService: '2025-11-10',
    operator: 'Phạm Văn W',
    location: 'Kho B'
  },
];

// Dữ liệu kho bãi
export const warehouseData = [
  {
    id: 'WH001',
    name: 'VCK2',
    type: 'Covered',
    capacity: 50000,
    occupied: 42000,
    available: 8000,
    utilization: 84,
    cargo: 'Tole nóng',
    status: 'active'
  },
  {
    id: 'WH002',
    name: 'VCCDCT',
    type: 'Covered',
    capacity: 45000,
    occupied: 38000,
    available: 7000,
    utilization: 84,
    cargo: 'Băng nóng',
    status: 'active'
  },
  {
    id: 'WH003',
    name: 'SBBS',
    type: 'Open Storage',
    capacity: 60000,
    occupied: 52000,
    available: 8000,
    utilization: 87,
    cargo: 'Cáp cuộn',
    status: 'active'
  },
  {
    id: 'WH004',
    name: 'NBDBT',
    type: 'Covered',
    capacity: 40000,
    occupied: 35000,
    available: 5000,
    utilization: 88,
    cargo: 'Tole mạ',
    status: 'active'
  },
  {
    id: 'WH005',
    name: 'N2',
    type: 'Covered',
    capacity: 35000,
    occupied: 18000,
    available: 17000,
    utilization: 51,
    cargo: 'Tole cuộn',
    status: 'low'
  },
  {
    id: 'WH006',
    name: 'N1',
    type: 'Open Storage',
    capacity: 30000,
    occupied: 2000,
    available: 28000,
    utilization: 7,
    cargo: '-',
    status: 'idle'
  },
  {
    id: 'WH007',
    name: 'N3',
    type: 'Covered',
    capacity: 38000,
    occupied: 25000,
    available: 13000,
    utilization: 66,
    cargo: 'Băng nóng',
    status: 'active'
  }
];

export const staffData = [
  {
    id: 'ST001',
    name: 'Nguyễn Văn A',
    department: 'Tally',
    shift: 'Ca 1',
    status: 'active',
    phone: '0901234567',
    email: 'nva@gtos.com',
    equipment: 'Cẩu trục 01'
  },
  {
    id: 'ST002',
    name: 'Trần Thị B',
    department: 'Đội cơ giới',
    shift: 'Ca 2',
    status: 'active',
    phone: '0901234568',
    email: 'ttb@gtos.com',
    equipment: null
  },
  {
    id: 'ST003',
    name: 'Lê Văn C',
    department: 'Đội bảo vệ',
    shift: 'Ca 1',
    status: 'active',
    phone: '0901234569',
    email: 'lvc@gtos.com',
    equipment: null
  },
  {
    id: 'ST004',
    name: 'Phạm Văn D',
    department: 'Đội kho hàng',
    shift: 'Ca 1',
    status: 'active',
    phone: '0901234570',
    email: 'pvd@gtos.com',
    equipment: null
  },
];

// Dữ liệu hiệu suất thiết bị
export const equipmentPerformance = [
  { category: 'Xe đầu kéo', efficiency: 92, maintenance: 85, safety: 95, utilization: 88 },
  { category: 'Rơ-moóc', efficiency: 88, maintenance: 90, safety: 92, utilization: 85 },
  { category: 'Xe nâng bãi', efficiency: 85, maintenance: 82, safety: 90, utilization: 92 },
  { category: 'Xe nâng hầm', efficiency: 90, maintenance: 88, safety: 93, utilization: 86 }
];

// Dữ liệu ca làm việc
export const shiftData = [
  { shift: 'Ca 1 (6h-14h)', staff: 42, present: 40, absent: 2 },
  { shift: 'Ca 2 (14h-22h)', staff: 38, present: 36, absent: 2 },
  { shift: 'Ca 3 (22h-6h)', staff: 35, present: 32, absent: 3 },
  { shift: 'Hành chính', staff: 28, present: 26, absent: 2 }
];

// Notifications
export const notificationList = [
  { type: 'success', message: 'MV SUNRISE hoàn thành xếp hàng', time: '5 phút trước' },
  { type: 'warning', message: 'Bến B2 cần bảo trì định kỳ', time: '15 phút trước' },
  { type: 'info', message: 'MV GOLDEN BRIDGE cập cảng lúc 14:00', time: '30 phút trước' }
];