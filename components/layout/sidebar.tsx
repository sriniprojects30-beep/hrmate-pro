'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { NAVIGATION_ITEMS } from '@/lib/utils/constants';
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
  ChevronLeft,
  ChevronRight,
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

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMob = window.innerWidth < 768;
      setIsMobile(isMob);
      if (isMob) {
        setCollapsed(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, isMobile, mobileOpen, setMobileOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

export function Sidebar() {
  const { collapsed, setCollapsed, isMobile } = useSidebar();
  const pathname = usePathname();

  // On mobile, the sidebar component doesn't render (handled by MobileNav instead)
  if (isMobile) {
    return null;
  }

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 280 }}
      className={cn(
        "hidden md:flex flex-col h-screen sticky top-0 left-0 z-40 glass-panel border-r border-[var(--sidebar-border)] bg-[var(--sidebar)]",
        "transition-all duration-300 ease-in-out"
      )}
    >
      {/* Brand & Toggle */}
      <div className="flex items-center justify-between h-[var(--header-height)] px-4 border-b border-[var(--sidebar-border)]">
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
            HR
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="font-bold text-lg whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              >
                HRMATE PRO
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        <nav className="flex flex-col gap-1.5">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = iconMap[item.icon] || LayoutDashboard;
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-primary"
                )}
                title={collapsed ? item.label : undefined}
              >
                <div className="flex-shrink-0 z-10">
                  <Icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
                </div>
                
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-medium whitespace-nowrap overflow-hidden text-sm z-10"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Info Bottom */}
      <div className="p-4 border-t border-[var(--sidebar-border)]">
        <div className={cn(
          "flex items-center gap-3 rounded-xl p-2 transition-colors",
          !collapsed ? "hover:bg-muted/50 cursor-pointer" : "justify-center"
        )}>
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
            <User size={18} className="text-secondary" />
          </div>
          
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex flex-col overflow-hidden whitespace-nowrap flex-1"
              >
                <span className="text-sm font-semibold text-foreground">Jane Doe</span>
                <span className="text-xs text-muted-foreground truncate">Super Admin</span>
              </motion.div>
            )}
          </AnimatePresence>

          {!collapsed && (
            <button className="p-1.5 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-md transition-colors ml-auto">
              <LogOut size={16} />
            </button>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
