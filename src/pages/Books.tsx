import React from 'react';
import { Plus, Book } from 'lucide-react';

export function Books() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Books Library
          </h2>
          <p className="mt-1 text-sm text-gray-500">Upload and manage PDF books for users to download.</p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
          >
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Upload Book
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative flex flex-col overflow-hidden rounded-lg shadow border border-border bg-card p-4">
            <div className="flex-shrink-0 bg-primary-50 h-40 rounded-md flex items-center justify-center mb-4">
              <Book className="h-12 w-12 text-primary-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">Al-Hidayah Vol {i}</h3>
              <p className="text-sm text-gray-500 mt-1">Hanafi Fiqh</p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                PDF (2.4 MB)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
