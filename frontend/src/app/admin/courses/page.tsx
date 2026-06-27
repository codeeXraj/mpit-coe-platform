'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookPlus, Pencil, Trash2, ToggleLeft, ToggleRight, ArrowLeft, Home } from 'lucide-react';

interface Course {
  _id: string;
  title: string;
  category: string;
  level: string;
  pricing: { originalPrice: number };
  studentsEnrolled: number;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
}

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminCoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const getToken = () => (typeof window !== 'undefined' ? localStorage.getItem('token') : '');

  const fetchCourses = useCallback(async () => {
    try {
      const res = await fetch(`${API}/courses`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setCourses(data.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchCourses(); }, [fetchCourses]);

  const toggleActive = async (id: string, current: boolean) => {
    await fetch(`${API}/courses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify({ isActive: !current }),
    });
    fetchCourses();
  };

  const deleteCourse = async (id: string) => {
    if (!confirm('Delete this course? This cannot be undone.')) return;
    await fetch(`${API}/courses/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    fetchCourses();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/admin/dashboard')} className="p-2 hover:bg-white rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Manage Courses</h1>
              <p className="text-sm text-slate-500">{courses.length} courses total</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                <Home className="w-4 h-4" /> Dashboard
              </button>
            </Link>
            <Link href="/admin/courses/create">
              <button className="flex items-center gap-2 px-4 md:px-5 py-2.5 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors text-sm">
                <BookPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Course</span>
                <span className="sm:hidden">Add</span>
              </button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-slate-400">Loading courses...</div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-5xl mb-4">📚</div>
            <p className="text-slate-500 mb-2 font-medium">No courses yet</p>
            <p className="text-slate-400 text-sm mb-6">Pehla course banao aur frontend pe show karo!</p>
            <Link href="/admin/courses/create">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                Create First Course
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Course</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Category</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Price</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {courses.map((course) => (
                    <tr key={course._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">{course.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{course.level} · {course.studentsEnrolled} students</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{course.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-orange-600">₹{course.pricing.originalPrice.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => toggleActive(course._id, course.isActive)} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                          {course.isActive
                            ? <><ToggleRight className="w-6 h-6 text-green-500" /><span className="text-xs text-green-600 font-medium">Active</span></>
                            : <><ToggleLeft className="w-6 h-6 text-slate-300" /><span className="text-xs text-slate-400 font-medium">Inactive</span></>}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <Link href={`/admin/courses/edit/${course._id}`}>
                            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                              <Pencil className="w-4 h-4 text-blue-500" />
                            </button>
                          </Link>
                          <button onClick={() => deleteCourse(course._id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-slate-100">
              {courses.map((course) => (
                <div key={course._id} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 mr-3">
                      <p className="font-semibold text-slate-900 text-sm">{course.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{course.category}</span>
                        <span className="text-xs text-slate-400">{course.level}</span>
                      </div>
                    </div>
                    <span className="font-bold text-orange-600 text-sm">₹{course.pricing.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <button onClick={() => toggleActive(course._id, course.isActive)} className="flex items-center gap-1">
                      {course.isActive
                        ? <><ToggleRight className="w-5 h-5 text-green-500" /><span className="text-xs text-green-600">Active</span></>
                        : <><ToggleLeft className="w-5 h-5 text-slate-300" /><span className="text-xs text-slate-400">Inactive</span></>}
                    </button>
                    <div className="flex gap-2">
                      <Link href={`/admin/courses/edit/${course._id}`}>
                        <button className="p-1.5 hover:bg-blue-50 rounded-lg"><Pencil className="w-4 h-4 text-blue-500" /></button>
                      </Link>
                      <button onClick={() => deleteCourse(course._id)} className="p-1.5 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
