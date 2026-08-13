import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8 animate-fade-in">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              HRMATE PRO
            </h1>
            <p className="text-muted-foreground mt-2 font-medium">
              Modern recruitment management
            </p>
          </Link>
        </div>
        
        <div className="w-full">
          {children}
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HRMATE PRO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
