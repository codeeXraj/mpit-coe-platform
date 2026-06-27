'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLoginModal from '@/components/admin/AdminLoginModal';

export default function AdminLoginPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      const userData = JSON.parse(user);
      if (userData.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
      <AdminLoginModal isOpen={showModal} onClose={() => router.push('/')} />
    </div>
  );
}
