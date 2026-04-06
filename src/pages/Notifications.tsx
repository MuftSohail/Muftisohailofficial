import React from 'react';
import { Send, Bell } from 'lucide-react';

export function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Push Notifications
        </h2>
        <p className="mt-1 text-sm text-gray-500">Compose and send push notifications to app users.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card shadow rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Compose Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                placeholder="e.g., New Fatwa Published"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                placeholder="Enter notification content here..."
              />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Target Topic</label>
              <select
                id="topic"
                name="topic"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
              >
                <option>All Users</option>
                <option>New Fatwas</option>
                <option>New Videos</option>
                <option>Event Reminders</option>
              </select>
            </div>
            <div className="pt-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
              >
                <Send className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" />
                Send Notification
              </button>
            </div>
          </form>
        </div>

        <div className="bg-card shadow rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            Recent History
          </h3>
          <ul className="space-y-4">
            <li className="text-sm">
              <p className="font-medium text-gray-900">New Video: Tafsir Surah Yaseen</p>
              <p className="text-gray-500">Sent to: New Videos</p>
              <p className="text-xs text-gray-400 mt-1">Today at 10:00 AM</p>
            </li>
            <li className="text-sm">
              <p className="font-medium text-gray-900">Daily Hadith Reminder</p>
              <p className="text-gray-500">Sent to: All Users</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday at 8:00 AM</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
