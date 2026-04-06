import React from 'react';
import { Plus, Video as VideoIcon } from 'lucide-react';

export function Videos() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Video Lectures
          </h2>
          <p className="mt-1 text-sm text-gray-500">Manage YouTube links and custom video uploads.</p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
          >
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add Video
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-lg shadow border border-border bg-card">
            <div className="flex-shrink-0 bg-gray-200 h-48 flex items-center justify-center">
              <VideoIcon className="h-12 w-12 text-gray-400" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-secondary-600">Tafsir</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">Surah Al-Fatiha Explanation</p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-2">
                    A detailed explanation of the opening chapter of the Quran, covering its linguistic miracles and deep meanings.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2023-10-20">Oct 20, 2023</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>45 mins</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
