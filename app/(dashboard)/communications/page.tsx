'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Search, Send, FileText, MoreVertical, Plus } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const CHATS = [
  { id: '1', name: 'Alice Smith', role: 'Senior Frontend Engineer', type: 'email', lastMessage: 'Thanks for the update on the interview schedule.', time: '10:42 AM', unread: 2 },
  { id: '2', name: 'Bob Jones', role: 'Product Manager', type: 'message', lastMessage: 'I have uploaded my portfolio.', time: 'Yesterday', unread: 0 },
  { id: '3', name: 'Charlie Brown', role: 'Backend Developer', type: 'email', lastMessage: 'Could you clarify the salary range?', time: 'Oct 12', unread: 0 },
];

const MESSAGES = [
  { id: '1', sender: 'Jane Doe (You)', text: 'Hi Alice, congratulations on passing the technical round! Are you available next Tuesday for the final culture fit interview?', time: 'Yesterday, 4:30 PM', isMe: true },
  { id: '2', sender: 'Alice Smith', text: 'Hi Jane, thank you! Yes, Tuesday works perfectly for me. Any time after 2 PM EST.', time: '10:42 AM', isMe: false },
];

export default function CommunicationsPage() {
  const [activeChat, setActiveChat] = useState(CHATS[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Communications</h1>
          <p className="text-muted-foreground text-sm">Manage emails and messages with candidates.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        {/* Chat List (Sidebar) */}
        <Card variant="glass" className="w-80 flex flex-col overflow-hidden hidden md:flex">
          <div className="p-4 border-b border-border">
            <Input 
              placeholder="Search conversations..." 
              icon={<Search className="h-4 w-4" />}
            />
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
            {CHATS.map((chat) => (
              <div 
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={cn(
                  "p-3 rounded-lg cursor-pointer transition-colors",
                  activeChat.id === chat.id ? "bg-primary/10" : "hover:bg-muted/50"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm text-foreground">{chat.name}</span>
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  {chat.type === 'email' ? <Mail className="h-3 w-3 text-primary" /> : <MessageSquare className="h-3 w-3 text-secondary" />}
                  <span className="text-xs text-muted-foreground truncate">{chat.role}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground truncate flex-1 pr-2">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <Badge variant="default" className="h-5 min-w-5 flex items-center justify-center px-1">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Active Chat Window */}
        <Card variant="glass" className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex justify-between items-center bg-muted/20">
            <div>
              <h2 className="font-semibold text-lg">{activeChat.name}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{activeChat.role}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {activeChat.type === 'email' ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
                  {activeChat.type === 'email' ? 'alice@example.com' : 'SMS'}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                Templates
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
            <div className="text-center text-xs text-muted-foreground my-4 relative">
              <span className="bg-background px-2 relative z-10">Tuesday, October 12, 2026</span>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-border -z-0"></div>
            </div>

            {MESSAGES.map((msg) => (
              <div key={msg.id} className={cn("flex flex-col max-w-[80%]", msg.isMe ? "ml-auto items-end" : "mr-auto items-start")}>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-medium text-foreground">{msg.sender}</span>
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                </div>
                <div className={cn(
                  "px-4 py-3 rounded-2xl text-sm shadow-sm",
                  msg.isMe 
                    ? "bg-primary text-primary-foreground rounded-tr-sm" 
                    : "bg-muted text-foreground border border-border/50 rounded-tl-sm"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-muted/10">
            <div className="flex gap-2">
              <Input 
                placeholder={`Reply to ${activeChat.name}...`} 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 rounded-full bg-background"
              />
              <Button size="icon" className="rounded-full flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
