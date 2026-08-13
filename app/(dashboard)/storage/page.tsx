'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, UploadCloud, FileText, Image as ImageIcon, File, MoreVertical, Download, Eye, Trash2, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const mockFiles = [
  { id: 1, name: 'Alice_Smith_Resume_2026.pdf', type: 'pdf', size: '2.4 MB', uploadedBy: 'Alice Smith', date: 'Oct 12, 2026' },
  { id: 2, name: 'Frontend_Developer_JD.docx', type: 'doc', size: '156 KB', uploadedBy: 'HR Team', date: 'Oct 10, 2026' },
  { id: 3, name: 'Company_Logo_HighRes.png', type: 'image', size: '4.1 MB', uploadedBy: 'Marketing', date: 'Sep 28, 2026' },
  { id: 4, name: 'Bob_Johnson_CoverLetter.pdf', type: 'pdf', size: '1.1 MB', uploadedBy: 'Bob Johnson', date: 'Oct 15, 2026' },
  { id: 5, name: 'Interview_Questions_Backend.pdf', type: 'pdf', size: '890 KB', uploadedBy: 'Engineering', date: 'Oct 01, 2026' },
  { id: 6, name: 'Q3_Hiring_Report.xlsx', type: 'doc', size: '3.2 MB', uploadedBy: 'Admin', date: 'Oct 05, 2026' },
  { id: 7, name: 'Team_Photo_2026.jpg', type: 'image', size: '8.5 MB', uploadedBy: 'HR Team', date: 'Sep 15, 2026' },
  { id: 8, name: 'Offer_Template_Standard.docx', type: 'doc', size: '45 KB', uploadedBy: 'HR Team', date: 'Aug 20, 2026' },
];

export default function StoragePage() {
  const [view, setView] = useState<'grid' | 'list'>('list');
  const [search, setSearch] = useState('');

  const filteredFiles = mockFiles.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="w-8 h-8 text-rose-500" />;
      case 'image': return <ImageIcon className="w-8 h-8 text-blue-500" />;
      case 'doc': return <File className="w-8 h-8 text-indigo-500" />;
      default: return <File className="w-8 h-8 text-slate-500" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Cloud Storage</h1>
          <p className="text-muted-foreground mt-1 text-slate-500">Manage resumes, documents, and assets.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-slate-500 text-right mr-4 hidden sm:block">
            <div className="font-medium text-slate-700 dark:text-slate-300">45 GB / 100 GB</div>
            <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
              <div className="bg-blue-500 h-full w-[45%]" />
            </div>
          </div>
          <Button className="glass-button bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <UploadCloud className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
        <div className="text-sm font-medium text-slate-500 px-2">
          Home / Documents / <span className="text-slate-900 dark:text-slate-100">Resumes</span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search files..." 
              className="pl-9 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <Button variant="ghost" size="icon" className={cn("h-8 w-8 rounded-md", view === 'list' && "bg-white dark:bg-slate-700 shadow-sm")} onClick={() => setView('list')}>
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className={cn("h-8 w-8 rounded-md", view === 'grid' && "bg-white dark:bg-slate-700 shadow-sm")} onClick={() => setView('grid')}>
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {view === 'list' ? (
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Size</th>
                <th className="px-6 py-3 font-medium">Uploaded By</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredFiles.map((file) => (
                <tr key={file.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    {getFileIcon(file.type)}
                    <span className="font-medium text-slate-900 dark:text-slate-100">{file.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{file.size}</td>
                  <td className="px-6 py-4 text-slate-500">{file.uploadedBy}</td>
                  <td className="px-6 py-4 text-slate-500">{file.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="hover:text-blue-500"><Eye className="w-4 h-4" /></button>
                      <button className="hover:text-indigo-500"><Download className="w-4 h-4" /></button>
                      <button className="hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFiles.map((file) => (
            <Card key={file.id} className="glass-card group hover:border-blue-500/50 hover:shadow-md transition-all bg-white/70 dark:bg-slate-900/70">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-full flex justify-end mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"><MoreVertical className="w-4 h-4" /></button>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getFileIcon(file.type)}
                </div>
                <h3 className="font-medium text-sm text-slate-900 dark:text-slate-100 line-clamp-1 w-full" title={file.name}>{file.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{file.size} • {file.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </motion.div>
  );
}
