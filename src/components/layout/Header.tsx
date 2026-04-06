import React from 'react';
import { Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <button type="button" className="text-gray-500 hover:text-gray-700 lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
            <User className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin User</span>
        </div>
      </div>
    </header>
  );
}
