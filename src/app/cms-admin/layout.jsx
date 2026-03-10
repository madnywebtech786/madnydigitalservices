'use client';

import { usePathname } from 'next/navigation';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function CmsAdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/cms-admin/login';

  return (
    <AdminGuard>
      {isLoginPage ? (
        children
      ) : (
        <AdminSidebar>{children}</AdminSidebar>
      )}
    </AdminGuard>
  );
}
