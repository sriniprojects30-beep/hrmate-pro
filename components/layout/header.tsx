'use client';

import { useState } from 'react';
import { ThemeSelector } from '@/components/layout/theme-selector';
import { cn } from '@/lib/utils/cn';
import { 
  Bell, 
  Search, 
  Menu, 
  User, 
  LogOut, 
  Settings, 
  ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-[var(--header-height)] w-full items-center justify-between px-4 glass-panel border-b border-border">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-md hover:bg-muted/80 text-foreground transition-colors">
          <Menu className="h-5 w-5" />
        </button>

        {/* Global Search Button */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors w-64 border-border/50">
          <Search className="h-4 w-4" />
          <span className="text-sm">Search...</span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="inline-flex items-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <ThemeSelector />

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-muted/80 text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-background"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-1 pr-2 rounded-full hover:bg-muted/50 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-medium text-sm">
              JD
            </div>
            <ChevronDown className={cn("h-4 w-4 text-muted-foreground hidden sm:block transition-transform duration-200", isDropdownOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 rounded-md glass-card z-50 py-1 shadow-lg"
                >
                  <div className="px-4 py-3 border-b border-border/50">
                    <p className="text-sm font-medium text-foreground">John Doe</p>
                    <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
                  </div>
                  <div className="p-1">
                    <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/80 rounded-sm transition-colors">
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                    <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/80 rounded-sm transition-colors">
                      <Settings className="h-4 w-4" />
                      Settings
                    </button>
                    <div className="my-1 border-t border-border/50" />
                    <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-danger hover:bg-danger/10 rounded-sm transition-colors">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
