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

  const customers = [
    { 
      id: 'C-001', 
      name: 'Restaurante El Dorado', 
      contact: 'Carlos Mendoza', 
      phone: '+51 987 654 321', 
      email: 'carlos@eldorado.pe',
      address: 'Av. Larco 123, Miraflores',
      type: 'Comercial',
      status: 'Activo',
      lastOrder: '2025-06-20',
      totalOrders: 45,
      totalSpent: 'S/ 12,600'
    },
    { 
      id: 'C-002', 
      name: 'Panadería San Martín', 
      contact: 'María García', 
      phone: '+51 976 543 210', 
      email: 'maria@sanmartin.pe',
      address: 'Jr. San Martín 456, San Isidro',
      type: 'Comercial',
      status: 'Activo',
      lastOrder: '2025-06-22',
      totalOrders: 32,
      totalSpent: 'S/ 3,040'
    },
    { 
      id: 'C-003', 
      name: 'Hotel Plaza', 
      contact: 'Roberto Silva', 
      phone: '+51 965 432 109', 
      email: 'roberto@hotelplaza.pe',
      address: 'Plaza de Armas 789, Lima Centro',
      type: 'Comercial',
      status: 'Activo',
      lastOrder: '2025-06-21',
      totalOrders: 67,
      totalSpent: 'S/ 37,520'
    },
    { 
      id: 'C-004', 
      name: 'Residencial Los Pinos', 
      contact: 'Ana Rojas', 
      phone: '+51 954 321 098', 
      email: 'ana.rojas@gmail.com',
      address: 'Cond. Los Pinos Mz. A Lt. 15, Surco',
      type: 'Residencial',
      status: 'Activo',
      lastOrder: '2025-06-19',
      totalOrders: 12,
      totalSpent: 'S/ 780'
    },
    { 
      id: 'C-005', 
      name: 'Cevichería Mariscos', 
      contact: 'Luis Fernández', 
      phone: '+51 943 210 987', 
      email: 'luis@mariscos.pe',
      address: 'Av. Brasil 321, Breña',
      type: 'Comercial',
      status: 'Inactivo',
      lastOrder: '2025-05-15',
      totalOrders: 8,
      totalSpent: 'S/ 2,240'
    }
  ];

  const deliveries = [
    {
      id: 'E-001',
      orderId: '#ZG-001',
      customer: 'Restaurante El Dorado',
      address: 'Av. Larco 123, Miraflores',
      driver: 'Pedro Mamani',
      vehicle: 'Camión - ABC-123',
      product: 'Cilindro 45kg',
      quantity: 1,
      scheduledDate: '2025-06-23',
      scheduledTime: '09:00',
      status: 'En tránsito',
      priority: 'Alta',
      phone: '+51 987 654 321'
    },
    {
      id: 'E-002',
      orderId: '#ZG-002',
      customer: 'Panadería San Martín',
      address: 'Jr. San Martín 456, San Isidro',
      driver: 'Miguel Torres',
      vehicle: 'Camioneta - DEF-456',
      product: 'Cilindro 15kg',
      quantity: 1,
      scheduledDate: '2025-06-23',
      scheduledTime: '10:30',
      status: 'Programada',
      priority: 'Media',
      phone: '+51 976 543 210'
    },
    {
      id: 'E-003',
      orderId: '#ZG-003',
      customer: 'Hotel Plaza',
      address: 'Plaza de Armas 789, Lima Centro',
      driver: 'Carlos Quispe',
      vehicle: 'Camión - GHI-789',
      product: 'Cilindro 45kg x2',
      quantity: 2,
      scheduledDate: '2025-06-23',
      scheduledTime: '14:00',
      status: 'Entregada',
      priority: 'Alta',
      phone: '+51 965 432 109'
    },
    {
      id: 'E-004',
      orderId: '#ZG-004',
      customer: 'Residencial Los Pinos',
      address: 'Cond. Los Pinos Mz. A Lt. 15, Surco',
      driver: 'Juan Vargas',
      vehicle: 'Camioneta - JKL-012',
      product: 'Cilindro 10kg',
      quantity: 1,
      scheduledDate: '2025-06-24',
      scheduledTime: '08:00',
      status: 'Programada',
      priority: 'Baja',
      phone: '+51 954 321 098'
    },
    {
      id: 'E-005',
      orderId: '#ZG-005',
      customer: 'Cevichería Mariscos',
      address: 'Av. Brasil 321, Breña',
      driver: 'Luis Huamán',
      vehicle: 'Camión - MNO-345',
      product: 'Cilindro 45kg',
      quantity: 1,
      scheduledDate: '2025-06-24',
      scheduledTime: '11:00',
      status: 'Retrasada',
      priority: 'Media',
      phone: '+51 943 210 987'
    }
  ];

  const getCustomerTypeColor = (type: string) => {
    return type === 'Comercial' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const getCustomerStatusColor = (status: string) => {
    return status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case 'Entregada': return 'bg-green-100 text-green-800';
      case 'En tránsito': return 'bg-blue-100 text-blue-800';
      case 'Programada': return 'bg-yellow-100 text-yellow-800';
      case 'Retrasada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
          {activeTab === 'dashboard' && (
            <>
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
            </>
          )}

          {/* Customers Section */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Clientes</h2>
                  <p className="text-gray-600">Administra la información de tus clientes</p>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all shadow-md">
                  + Nuevo Cliente
                </button>
              </div>

              {/* Search and Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Buscar clientes..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Todos los tipos</option>
                      <option>Comercial</option>
                      <option>Residencial</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Todos los estados</option>
                      <option>Activo</option>
                      <option>Inactivo</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Customers Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Lista de Clientes</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último Pedido</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Gastado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                              <div className="text-sm text-gray-500">{customer.id}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm text-gray-900">{customer.contact}</div>
                              <div className="text-sm text-gray-500">{customer.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCustomerTypeColor(customer.type)}`}>
                              {customer.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCustomerStatusColor(customer.status)}`}>
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {customer.lastOrder}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {customer.totalSpent}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">Ver</button>
                              <button className="text-green-600 hover:text-green-800">Editar</button>
                              <button className="text-red-600 hover:text-red-800">Eliminar</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Deliveries Section */}
          {activeTab === 'deliveries' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestión de Entregas</h2>
                  <p className="text-gray-600">Administra y supervisa todas las entregas</p>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all shadow-md">
                  + Programar Entrega
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-500 rounded-lg">
                      <TruckIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">En Tránsito</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-500 rounded-lg">
                      <ClipboardDocumentListIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Programadas</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <ChartBarIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Completadas Hoy</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 bg-red-500 rounded-lg">
                      <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Retrasadas</p>
                      <p className="text-2xl font-bold text-gray-900">2</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Buscar por cliente, conductor o ID..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Todos los estados</option>
                      <option>Programada</option>
                      <option>En tránsito</option>
                      <option>Entregada</option>
                      <option>Retrasada</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Todas las prioridades</option>
                      <option>Alta</option>
                      <option>Media</option>
                      <option>Baja</option>
                    </select>
                    <input
                      type="date"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue="2025-06-23"
                    />
                  </div>
                </div>
              </div>

              {/* Deliveries Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Entregas Programadas</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID / Pedido</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conductor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha/Hora</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridad</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {deliveries.map((delivery) => (
                        <tr key={delivery.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{delivery.id}</div>
                              <div className="text-sm text-blue-600">{delivery.orderId}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="max-w-xs">
                              <div className="text-sm font-medium text-gray-900">{delivery.customer}</div>
                              <div className="text-sm text-gray-500 truncate">{delivery.address}</div>
                              <div className="text-sm text-gray-500">{delivery.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{delivery.driver}</div>
                              <div className="text-sm text-gray-500">{delivery.vehicle}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm text-gray-900">{delivery.product}</div>
                              <div className="text-sm text-gray-500">Qty: {delivery.quantity}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm text-gray-900">{delivery.scheduledDate}</div>
                              <div className="text-sm text-gray-500">{delivery.scheduledTime}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDeliveryStatusColor(delivery.status)}`}>
                              {delivery.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(delivery.priority)}`}>
                              {delivery.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">Ver</button>
                              <button className="text-green-600 hover:text-green-800">Editar</button>
                              <button className="text-yellow-600 hover:text-yellow-800">Seguir</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rutas de Entrega</h3>
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TruckIcon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Mapa de Rutas de Entrega</p>
                    <p className="text-sm text-gray-500 mt-2">Integración con Google Maps próximamente</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
                      
      </div>
    </div>
  );
}