'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { NAVIGATION_ITEMS } from '@/lib/utils/constants';
import { useSidebar } from './sidebar';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Filter,
  CalendarClock,
  CalendarDays,
  CheckSquare,
  MessageSquare,
  HardDrive,
  Bot,
  BarChart3,
  ClipboardList,
  Blocks,
  Settings,
  X,
  User,
  LogOut
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'layout-dashboard': LayoutDashboard,
  'users': Users,
  'briefcase': Briefcase,
  'file-text': FileText,
  'filter': Filter,
  'calendar-clock': CalendarClock,
  'calendar-days': CalendarDays,
  'check-square': CheckSquare,
  'message-square': MessageSquare,
  'hard-drive': HardDrive,
  'bot': Bot,
  'bar-chart-3': BarChart3,
  'clipboard-list': ClipboardList,
  'blocks': Blocks,
  'settings': Settings,
};

export function MobileNav() {
  const { isMobile, mobileOpen, setMobileOpen } = useSidebar();
  const pathname = usePathname();

  // Close sidebar on path change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, setMobileOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-[280px] flex flex-col bg-sidebar border-r border-sidebar-border shadow-2xl glass-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-[var(--header-height)] px-4 border-b border-sidebar-border">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                  HR
                </div>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  HRMATE PRO
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
              <nav className="flex flex-col gap-1.5">
                {NAVIGATION_ITEMS.map((item) => {
                  const Icon = iconMap[item.icon] || LayoutDashboard;
                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 font-medium" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-primary font-medium"
                      )}
                    >
                      <Icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-sidebar-border bg-sidebar/50">
              <div className="flex items-center gap-3 rounded-xl p-2 bg-background border border-border shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <User size={20} className="text-secondary" />
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                  <span className="text-sm font-semibold text-foreground truncate">Jane Doe</span>
                  <span className="text-xs text-muted-foreground truncate">Super Admin</span>
                </div>
                <button className="p-2 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-md transition-colors ml-auto" aria-label="Sign out">
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
