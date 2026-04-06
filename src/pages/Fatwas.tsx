import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';

const mockFatwas = [
  { id: 1, title: 'Ruling on Digital Currency', category: 'Finance', date: '2023-10-25', status: 'Published' },
  { id: 2, title: 'Fasting while traveling', category: 'Ibadat', date: '2023-10-20', status: 'Published' },
  { id: 3, title: 'Zakat on Gold Jewelry', category: 'Zakat', date: '2023-10-15', status: 'Draft' },
];

export function Fatwas() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Fatwa Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">Manage, create, and publish fatwas with references.</p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New Fatwa
          </button>
        </div>
      </div>

      <div className="flex items-center px-4 py-3 bg-card rounded-lg shadow border border-border">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search fatwas by title or category..."
          className="ml-3 block w-full border-0 bg-transparent p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-card shadow rounded-lg border border-border overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {mockFatwas.map((fatwa) => (
              <tr key={fatwa.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {fatwa.title}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{fatwa.category}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{fatwa.date}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    fatwa.status === 'Published' ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20' : 'bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20'
                  }`}>
                    {fatwa.status}
                  </span>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button className="text-secondary-600 hover:text-secondary-900 mr-4">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
