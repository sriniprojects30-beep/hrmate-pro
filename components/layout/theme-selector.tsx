'use client';

import { useTheme } from '@/components/providers/theme-provider';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const themes = [
  { key: 'light' as const, icon: Sun, label: 'Light' },
  { key: 'dark' as const, icon: Moon, label: 'Dark' },
  { key: 'system' as const, icon: Monitor, label: 'System' },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex items-center gap-0.5 rounded-full bg-muted/60 p-1 glass" role="radiogroup" aria-label="Theme selector">
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            key={key}
            role="radio"
            aria-checked={isActive}
            aria-label={`${label} theme`}
            onClick={() => setTheme(key)}
            className={`
              relative z-10 flex items-center justify-center rounded-full p-2
              text-sm font-medium transition-colors duration-200
              ${isActive
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <Icon className="relative z-10 h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
