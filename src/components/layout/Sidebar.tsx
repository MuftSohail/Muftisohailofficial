import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  Library, 
  MessageSquare, 
  Bell, 
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Fatwas', path: '/fatwas', icon: BookOpen },
  { name: 'Videos', path: '/videos', icon: Video },
  { name: 'Books', path: '/books', icon: Library },
  { name: 'Q&A', path: '/qna', icon: MessageSquare },
  { name: 'Notifications', path: '/notifications', icon: Bell },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-primary-900 text-white">
      <div className="flex h-16 items-center justify-center border-b border-primary-800 px-4">
        <h1 className="text-lg font-bold text-secondary-500 text-center leading-tight">
          Mufti Suhail Sherani<br />
          <span className="text-sm font-normal text-primary-200">Admin Dashboard</span>
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-800 text-secondary-400'
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-primary-800 p-4">
        <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-primary-100 hover:bg-primary-800 hover:text-white transition-colors">
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
