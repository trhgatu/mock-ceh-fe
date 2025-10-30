import { useState } from 'react';
import { Activity, Ship, Truck, Warehouse, Users, Anchor, Bell, Menu, X } from 'lucide-react';
import OverviewPage from './OverviewPage';
import VesselsPage from './VesselsPage';
import EquipmentPage from './EquipmentPage';
import WarehousePage from './WarehousePage';
import StaffPage from './StaffPage';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications] = useState(3);
  const [activeTab, setActiveTab] = useState('overview');

  // Menu items
  const menuItems = [
    { id: 'overview', name: 'Tổng quan', icon: Activity, component: OverviewPage },
    { id: 'vessels', name: 'Cầu bến', icon: Ship, component: VesselsPage },
    { id: 'equipment', name: 'Thiết bị', icon: Truck, component: EquipmentPage },
    { id: 'warehouse', name: 'Kho bãi', icon: Warehouse, component: WarehousePage },
    { id: 'staff', name: 'Nhân sự', icon: Users, component: StaffPage }
  ];

  // Get active component
  const ActiveComponent = menuItems.find(item => item.id === activeTab)?.component || OverviewPage;

  return (
    <div className="flex h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 transition-all duration-300 relative z-10 flex flex-col`}>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
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
              <h1 className="text-2xl font-bold text-white">GTOS - Cảng Tân Thuận</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Bell size={20} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}