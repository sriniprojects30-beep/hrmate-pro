"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Candidate {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  current_position?: string;
  status: string;
}

export function CandidateList({ initialCandidates }: { initialCandidates: Candidate[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = initialCandidates.filter(c => 
    `${c.first_name} ${c.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (c.current_position || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Candidates</h2>
        <div className="flex items-center space-x-2">
          <Link href="/candidates/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Candidate
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 my-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search candidates by name or role..."
            className="pl-8 bg-background/50 backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="glass-card">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <Card className="glass-card">
        <div className="rounded-md border border-white/10 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground border-b border-white/10">
              <tr>
                <th className="h-12 px-4 font-medium">Name</th>
                <th className="h-12 px-4 font-medium">Role</th>
                <th className="h-12 px-4 font-medium">Status</th>
                <th className="h-12 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <Link href={`/candidates/${candidate.id}`} className="block">
                      <div className="font-medium text-foreground">{candidate.first_name} {candidate.last_name}</div>
                      <div className="text-muted-foreground text-xs">{candidate.email}</div>
                    </Link>
                  </td>
                  <td className="p-4">{candidate.current_position || 'N/A'}</td>
                  <td className="p-4">
                    <Badge variant={
                      candidate.status.toLowerCase() === 'applied' ? 'default' :
                      candidate.status.toLowerCase() === 'in review' ? 'secondary' :
                      candidate.status.toLowerCase() === 'interviewing' ? 'outline' :
                      candidate.status.toLowerCase() === 'offer extended' ? 'default' : 'default'
                    }>
                      {candidate.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {filteredCandidates.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-muted-foreground">
                    No candidates found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
