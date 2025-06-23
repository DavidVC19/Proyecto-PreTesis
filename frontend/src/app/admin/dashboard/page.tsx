'use client';

import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  TruckIcon, 
  CurrencyDollarIcon,
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function ZGasAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: HomeIcon },
    { id: 'customers', name: 'Clientes', icon: UserGroupIcon },
    { id: 'deliveries', name: 'Entregas', icon: TruckIcon },
    { id: 'orders', name: 'Pedidos', icon: ClipboardDocumentListIcon },
    { id: 'reports', name: 'Reportes', icon: ChartBarIcon },
    { id: 'support', name: 'Soporte', icon: PhoneIcon },
    { id: 'settings', name: 'Configuración', icon: Cog6ToothIcon },
  ];

  const stats = [
    { 
      title: 'Ventas del Mes', 
      value: 'S/ 125,480', 
      change: '+12.5%', 
      trending: 'up',
      icon: CurrencyDollarIcon,
      color: 'bg-green-500'
    },
    { 
      title: 'Clientes Activos', 
      value: '1,234', 
      change: '+8.2%', 
      trending: 'up',
      icon: UserGroupIcon,
      color: 'bg-blue-500'
    },
    { 
      title: 'Entregas Pendientes', 
      value: '47', 
      change: '-15.3%', 
      trending: 'down',
      icon: TruckIcon,
      color: 'bg-green-600'
    },
    { 
      title: 'Cilindros en Stock', 
      value: '892', 
      change: '+5.1%', 
      trending: 'up',
      icon: ChartBarIcon,
      color: 'bg-blue-600'
    },
  ];

  const recentOrders = [
    { id: '#ZG-001', customer: 'Restaurante El Dorado', type: 'Cilindro 45kg', status: 'Entregado', amount: 'S/ 280' },
    { id: '#ZG-002', customer: 'Panadería San Martín', type: 'Cilindro 15kg', status: 'En tránsito', amount: 'S/ 95' },
    { id: '#ZG-003', customer: 'Hotel Plaza', type: 'Cilindro 45kg x2', status: 'Pendiente', amount: 'S/ 560' },
    { id: '#ZG-004', customer: 'Residencial Los Pinos', type: 'Cilindro 10kg', status: 'Entregado', amount: 'S/ 65' },
    { id: '#ZG-005', customer: 'Cevichería Mariscos', type: 'Cilindro 45kg', status: 'En tránsito', amount: 'S/ 280' },
  ];

  const notifications = [
    { type: 'warning', message: 'Stock bajo: Cilindros 15kg (Solo quedan 12 unidades)' },
    { type: 'info', message: 'Nueva ruta de entrega programada para San Isidro' },
    { type: 'success', message: 'Pago recibido de Restaurante El Dorado - S/ 280' },
    { type: 'warning', message: 'Entrega retrasada: Pedido #ZG-008' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Entregado': return 'bg-green-100 text-green-800';
      case 'En tránsito': return 'bg-blue-100 text-blue-800';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning': return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'success': return <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />;
      default: return <BellIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Z Gas</h1>
                <p className="text-sm text-gray-600">Panel Administrativo</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <BellIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-600">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-6">
            <div className="px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 mb-2 text-left rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        {stat.trending === 'up' ? (
                          <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowTrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${
                          stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Pedidos Recientes</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-blue-600">{order.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mt-1">{order.customer}</p>
                        <p className="text-xs text-gray-600">{order.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Notificaciones</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      {getNotificationIcon(notification.type)}
                      <p className="text-sm text-gray-700 flex-1">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group">
                <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-green-600">
                  <UserGroupIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Nuevo Cliente</span>
              </button>
              
              <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-600">
                  <TruckIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Nueva Entrega</span>
              </button>
              
              <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group">
                <div className="w-8 h-8 bg-green-600 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-green-700">
                  <ClipboardDocumentListIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Crear Pedido</span>
              </button>
              
              <button className="p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-700">
                  <ChartBarIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Ver Reportes</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}