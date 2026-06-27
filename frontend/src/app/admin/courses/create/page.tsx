'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const inputCls = 'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white';
const labelCls = 'block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide';

export default function CreateCoursePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: 'AI',
    level: 'Beginner',
    thumbnail: '',
    instructorName: '',
    instructorDesignation: '',
    durationWeeks: '',
    totalHours: '',
    originalPrice: '',
    discountedPrice: '',
    isDiscountActive: false,
    isFeatured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      title: form.title,
      shortDescription: form.shortDescription,
      description: form.description,
      category: form.category,
      level: form.level,
      thumbnail: form.thumbnail,
      instructor: { name: form.instructorName, designation: form.instructorDesignation },
      duration: { weeks: Number(form.durationWeeks) || 0, totalHours: Number(form.totalHours) || 0 },
      pricing: {
        originalPrice: Number(form.originalPrice) || 0,
        discountedPrice: Number(form.discountedPrice) || Number(form.originalPrice) || 0,
        isDiscountActive: form.isDiscountActive,
      },
      isFeatured: form.isFeatured,
    };

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
      const res = await fetch(`${API}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/courses');
      } else {
        setError(data.message || 'Course create karne mein error aaya');
      }
    } catch {
      setError('Server se connect nahi ho pa raha. Backend chal raha hai?');
    }
    setLoading(false);
  };

  const f = (k: string, v: any) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => router.push('/admin/courses')} className="p-2 hover:bg-white rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Create New Course</h1>
            <p className="text-sm text-slate-400">Yeh course home page pe carousel mein show hoga</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6 border border-slate-100">
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">{error}</div>
          )}

          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="font-bold text-slate-700 border-b border-slate-100 pb-2">Basic Information</h2>

            <div>
              <label className={labelCls}>Course Title *</label>
              <input required value={form.title} onChange={e => f('title', e.target.value)}
                placeholder="e.g. AI & Machine Learning Fundamentals" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Short Description *</label>
              <input required value={form.shortDescription} onChange={e => f('shortDescription', e.target.value)}
                placeholder="One line about the course" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Full Description</label>
              <textarea value={form.description} onChange={e => f('description', e.target.value)}
                placeholder="Detailed course description..." rows={3} className={`${inputCls} resize-none`} />
            </div>

            <div>
              <label className={labelCls}>Thumbnail URL</label>
              <input value={form.thumbnail} onChange={e => f('thumbnail', e.target.value)}
                placeholder="https://res.cloudinary.com/... ya koi bhi image URL" className={inputCls} />
              <p className="text-xs text-slate-400 mt-1">Cloudinary se upload karke URL paste karo</p>
            </div>
          </div>

          {/* Category & Level */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Category *</label>
              <select required value={form.category} onChange={e => f('category', e.target.value)} className={inputCls}>
                <option value="AI">🤖 AI</option>
                <option value="CyberSecurity">🛡️ Cyber Security</option>
                <option value="Drone">🚁 Drone Technology</option>
                <option value="3DPrinting">🖨️ 3D Printing</option>
                <option value="Other">📚 Other</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Level *</label>
              <select required value={form.level} onChange={e => f('level', e.target.value)} className={inputCls}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Instructor */}
          <div className="space-y-4">
            <h2 className="font-bold text-slate-700 border-b border-slate-100 pb-2">Instructor</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Instructor Name</label>
                <input value={form.instructorName} onChange={e => f('instructorName', e.target.value)}
                  placeholder="Dr. Rajesh Kumar" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Designation</label>
                <input value={form.instructorDesignation} onChange={e => f('instructorDesignation', e.target.value)}
                  placeholder="Senior AI Researcher" className={inputCls} />
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-4">
            <h2 className="font-bold text-slate-700 border-b border-slate-100 pb-2">Duration</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Weeks</label>
                <input type="number" min="0" value={form.durationWeeks} onChange={e => f('durationWeeks', e.target.value)}
                  placeholder="12" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Total Hours</label>
                <input type="number" min="0" value={form.totalHours} onChange={e => f('totalHours', e.target.value)}
                  placeholder="48" className={inputCls} />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h2 className="font-bold text-slate-700 border-b border-slate-100 pb-2">Pricing</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Original Price (₹) *</label>
                <input required type="number" min="0" value={form.originalPrice} onChange={e => f('originalPrice', e.target.value)}
                  placeholder="1100" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Discounted Price (₹)</label>
                <input type="number" min="0" value={form.discountedPrice} onChange={e => f('discountedPrice', e.target.value)}
                  placeholder="999" className={inputCls} />
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.isDiscountActive} onChange={e => f('isDiscountActive', e.target.checked)}
                className="w-4 h-4 accent-orange-500" />
              <span className="text-sm text-slate-600 font-medium">Discount active hai?</span>
            </label>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <h2 className="font-bold text-slate-700 border-b border-slate-100 pb-2">Options</h2>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.isFeatured} onChange={e => f('isFeatured', e.target.checked)}
                className="w-4 h-4 accent-orange-500" />
              <span className="text-sm text-slate-600 font-medium">Featured course mark karo (⭐ badge milega)</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {loading ? 'Creating...' : 'Create Course'}
          </button>
        </form>
      </div>
    </div>
  );
}
