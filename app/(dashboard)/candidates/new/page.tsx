'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, UploadCloud, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { createCandidate } from '@/app/actions/candidates';

export default function NewCandidatePage() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    currentCompany: '',
    currentPosition: '',
    experience: '',
    source: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataObj = new FormData();
    formDataObj.append('first_name', formData.firstName);
    formDataObj.append('last_name', formData.lastName);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('location', formData.location);
    formDataObj.append('current_company', formData.currentCompany);
    formDataObj.append('current_position', formData.currentPosition);
    formDataObj.append('experience_years', formData.experience);
    
    try {
      await createCandidate(formDataObj);
      router.push('/candidates');
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/candidates" className="hover:text-primary transition-colors">Candidates</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-foreground font-medium">New Candidate</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Add New Candidate</h1>
          <p className="text-muted-foreground text-sm">Create a new candidate profile.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-border pb-2">Basic Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
              <Input 
                id="firstName" 
                required 
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
              <Input 
                id="lastName" 
                required 
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe" 
              />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-border pb-2">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email *</label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="john.doe@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <Input 
                id="phone" 
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="location" className="text-sm font-medium">Location</label>
              <Input 
                id="location" 
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country" 
              />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-border pb-2">Professional Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Current Company</label>
              <Input 
                id="company" 
                value={formData.currentCompany}
                onChange={e => setFormData({ ...formData, currentCompany: e.target.value })}
                placeholder="Tech Inc." 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="position" className="text-sm font-medium">Current Position</label>
              <Input 
                id="position" 
                value={formData.currentPosition}
                onChange={e => setFormData({ ...formData, currentPosition: e.target.value })}
                placeholder="Software Engineer" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">Experience (years)</label>
              <Input 
                id="experience" 
                type="number" 
                min="0"
                value={formData.experience}
                onChange={e => setFormData({ ...formData, experience: e.target.value })}
                placeholder="5" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="source" className="text-sm font-medium">Source</label>
              <select 
                id="source"
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.source}
                onChange={e => setFormData({ ...formData, source: e.target.value })}
              >
                <option value="">Select source...</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Internal Referral</option>
                <option value="website">Company Website</option>
                <option value="agency">Agency</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="notes" className="text-sm font-medium">Notes</label>
              <textarea 
                id="notes" 
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Additional details..." 
              />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-border pb-2">Resume / CV</h2>
          <div 
            className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center transition-colors ${isDragging ? 'border-primary bg-primary/5' : 'border-border'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Upload Resume</h3>
            <p className="text-sm text-muted-foreground mb-4">Drag and drop your file here, or click to browse</p>
            <Button type="button" variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Browse Files
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Supported formats: PDF, DOCX, TXT (Max 5MB)</p>
          </div>
        </Card>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.push('/candidates')}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Save Candidate
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
