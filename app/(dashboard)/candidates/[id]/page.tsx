"use client";

import React, { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, Calendar, Download, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

export default function CandidateProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState("Overview");
  
  const tabs = ["Overview", "Resume", "Applications", "Notes"];
  
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
        <Link href="/candidates" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Candidates
        </Link>
      </div>
      
      <Card className="glass-card p-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/20 to-blue-500/20" />
        <div className="relative pt-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-background border-4 border-background/50 flex items-center justify-center text-3xl font-bold text-primary shadow-xl">
              AJ
            </div>
            <div>
              <h1 className="text-3xl font-bold">Alice Johnson {id && <span className="text-sm font-normal text-muted-foreground opacity-50">#{id}</span>}</h1>
              <p className="text-muted-foreground text-lg flex items-center gap-2 mt-1">
                <Briefcase className="h-4 w-4" /> Frontend Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="glass-card">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            <Button>
              Hire Candidate
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" /> alice@example.com
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" /> +1 (555) 123-4567
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> San Francisco, CA
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" /> Applied 2 days ago
          </div>
        </div>
      </Card>
      
      <div className="flex space-x-2 border-b border-white/10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === tab 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        {activeTab === "Overview" && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate and results-driven Frontend Engineer with over 5 years of experience building scalable web applications. Proficient in React, Next.js, and modern CSS frameworks like Tailwind. Adept at collaborating with cross-functional teams to deliver high-quality software on time.
                </p>
              </Card>
              
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 ring-4 ring-background" />
                    <h4 className="font-medium">Senior UI Developer</h4>
                    <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                    <p className="text-sm mt-2 text-muted-foreground">Led the migration of a legacy Angular app to Next.js, improving performance by 40%.</p>
                  </div>
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-primary/50 rounded-full -left-[6.5px] top-1.5 ring-4 ring-background" />
                    <h4 className="font-medium">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">WebSolutions LLC • 2018 - 2021</p>
                    <p className="text-sm mt-2 text-muted-foreground">Developed responsive user interfaces for various client projects using React.</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </Card>
              
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass-card">
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab !== "Overview" && (
          <Card className="glass-card p-12 text-center">
            <h3 className="text-xl font-medium mb-2">{activeTab} Content</h3>
            <p className="text-muted-foreground">This section is currently under development.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
