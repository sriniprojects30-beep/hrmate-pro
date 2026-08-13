'use client';

type HapticPattern = 'success' | 'error' | 'warning' | 'tap' | 'heavy';

const patterns: Record<HapticPattern, number | number[]> = {
  success: [10, 50, 10],
  error: [50, 30, 50, 30, 50],
  warning: [30, 50, 30],
  tap: 10,
  heavy: 50,
};

export function hapticFeedback(pattern: HapticPattern = 'tap') {
  if (typeof window === 'undefined') return;
  if (!navigator?.vibrate) return;
  
  // Respect reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  
  try {
    navigator.vibrate(patterns[pattern]);
  } catch {
    // Vibration not supported, silently fail
  }
}
