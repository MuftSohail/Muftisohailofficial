import React from 'react';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Settings
        </h2>
        <p className="mt-1 text-sm text-gray-500">Manage app configuration and admin preferences.</p>
      </div>

      <div className="bg-card shadow rounded-lg border border-border p-6 max-w-2xl">
        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">General Settings</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="app-name" className="block text-sm font-medium text-gray-700">App Name</label>
                <input
                  type="text"
                  id="app-name"
                  defaultValue="Mufti Suhail Sherani - Islamic Guidance"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  id="contact-email"
                  defaultValue="admin@islamicguidance.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="text-lg font-medium text-gray-900">API Integrations</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="youtube-api" className="block text-sm font-medium text-gray-700">YouTube API Key</label>
                <input
                  type="password"
                  id="youtube-api"
                  defaultValue="••••••••••••••••••••••••"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
            >
              <Save className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
