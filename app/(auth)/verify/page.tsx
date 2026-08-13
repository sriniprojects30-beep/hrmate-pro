import Link from 'next/link';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Verify Email | HRMATE PRO',
};

export default function VerifyPage() {
  return (
    <div className="glass-card p-8 w-full text-center animate-fade-in">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <Mail className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Check your email</h2>
      <p className="text-muted-foreground mb-6">
        We've sent you a verification link. Please check your email to verify your account before logging in.
        You can close this page once you've verified your email.
      </p>
      <Link 
        href="/login"
        className="inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none transition-colors"
      >
        Return to login
      </Link>
    </div>
  );
}
