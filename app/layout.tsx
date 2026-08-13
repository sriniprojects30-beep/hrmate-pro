import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'HRMATE PRO — Recruitment Management Platform',
    template: '%s | HRMATE PRO',
  },
  description:
    'Modern recruitment management platform for teams. Manage candidates, jobs, interviews, and hiring pipelines with AI-powered insights.',
  keywords: [
    'recruitment',
    'hiring',
    'candidates',
    'ATS',
    'HR',
    'human resources',
    'talent acquisition',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'HRMATE PRO',
    title: 'HRMATE PRO — Recruitment Management Platform',
    description:
      'Modern recruitment management platform for teams. Manage candidates, jobs, interviews, and hiring pipelines with AI-powered insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMATE PRO — Recruitment Management Platform',
    description:
      'Modern recruitment management platform for teams.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('hrmate-theme');
                  var theme = stored || 'system';
                  var resolved = theme;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(resolved);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
