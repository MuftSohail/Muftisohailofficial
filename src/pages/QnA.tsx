import React from 'react';
import { MessageSquare, CheckCircle, Clock } from 'lucide-react';

const questions = [
  { id: 1, user: 'Ahmed Ali', question: 'What is the ruling on investing in index funds?', status: 'Pending', date: '2 hours ago' },
  { id: 2, user: 'Fatima S.', question: 'Can I pay Zakat in advance?', status: 'Answered', date: '1 day ago' },
  { id: 3, user: 'Anonymous', question: 'Is it permissible to work in a conventional bank?', status: 'Pending', date: '2 days ago' },
];

export function QnA() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          User Questions (Q&A)
        </h2>
        <p className="mt-1 text-sm text-gray-500">Review and answer questions submitted by app users.</p>
      </div>

      <div className="bg-card shadow rounded-lg border border-border">
        <ul role="list" className="divide-y divide-border">
          {questions.map((q) => (
            <li key={q.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${q.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                    {q.status === 'Pending' ? <Clock className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{q.user}</p>
                    <p className="text-sm text-gray-500 mt-1">{q.question}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-gray-500">{q.date}</span>
                  {q.status === 'Pending' && (
                    <button className="text-sm text-primary-600 font-medium hover:text-primary-800">
                      Answer Now
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
