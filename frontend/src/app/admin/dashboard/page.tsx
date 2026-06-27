'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Users, BookOpen, DollarSign, TrendingUp, Database, UserPlus, BookPlus, Settings, BarChart3, FileText, Menu, X, Home, LogOut, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const sidebarLinks = [
    { name: 'Dashboard', icon: Home, href: '/admin/dashboard' },
    { name: 'Students', icon: Users, href: '/admin/users' },
    { name: 'Courses', icon: BookOpen, href: '/admin/courses' },
    { name: 'Payments', icon: DollarSign, href: '/admin/payments' },
    { name: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
    { name: 'Database Test', icon: Database, href: '/admin/test' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  const stats = [
    { title: 'Total Students', value: '0', change: '+0%', icon: Users, bgColor: 'bg-blue-500/10', textColor: 'text-blue-600' },
    { title: 'Active Courses', value: '0', change: '+0%', icon: BookOpen, bgColor: 'bg-green-500/10', textColor: 'text-green-600' },
    { title: 'Total Revenue', value: '₹0', change: '+0%', icon: DollarSign, bgColor: 'bg-yellow-500/10', textColor: 'text-yellow-600' },
    { title: 'Enrollments', value: '0', change: '+0%', icon: TrendingUp, bgColor: 'bg-purple-500/10', textColor: 'text-purple-600' }
  ];

  const quickActions = [
    { title: 'Test Database', description: 'Test backend & database', icon: Database, href: '/admin/test', iconBg: 'bg-cyan-500' },
    { title: 'Manage Students', description: 'View & edit students', icon: Users, href: '/admin/users', iconBg: 'bg-blue-500' },
    { title: 'Manage Courses', description: 'Create & manage courses', icon: BookOpen, href: '/admin/courses', iconBg: 'bg-green-500' },
    { title: 'Add Faculty', description: 'Create instructor accounts', icon: UserPlus, href: '/admin/faculty', iconBg: 'bg-purple-500' },
    { title: 'Create Course', description: 'Add new course', icon: BookPlus, href: '/admin/courses/create', iconBg: 'bg-orange-500' },
    { title: 'View Payments', description: 'Track payments', icon: DollarSign, href: '/admin/payments', iconBg: 'bg-yellow-500' },
    { title: 'Analytics', description: 'View reports', icon: BarChart3, href: '/admin/analytics', iconBg: 'bg-pink-500' },
    { title: 'Settings', description: 'Configure settings', icon: Settings, href: '/admin/settings', iconBg: 'bg-slate-500' }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">MPIT CoE</h2>
                <p className="text-xs text-slate-500">Admin Panel</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.name} href={link.href}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-slate-700 font-medium">
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors w-full text-slate-700 font-medium">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <button onClick={() => setSidebarOpen(true)} className="fixed top-4 left-4 z-40 lg:hidden bg-white p-2 rounded-lg shadow-lg">
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex-1 lg:ml-64">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
            <p className="text-slate-600">Welcome to MPIT Centre of Excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                      <Icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                  </div>
                  <h3 className="text-slate-600 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.title} href={action.href}>
                    <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-slate-100 hover:scale-105">
                      <div className={`${action.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-slate-600">{action.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Students</h2>
                <Link href="/admin/users" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  View All →
                </Link>
              </div>
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-600">No students registered yet</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
              </div>
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-600">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
