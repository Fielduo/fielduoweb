'use client';

import { useEffect, useState } from 'react';
import { Users, Calendar, Download, Search, Trash2, Mail } from 'lucide-react';

interface EarlyBirdSubscriber {
  id: string;
  email: string;
  createdAt: string;
}

export default function AdminEarlyBird() {
  const [subscribers, setSubscribers] = useState<EarlyBirdSubscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/early-bird');
      const data = await response.json();
      setSubscribers(data.items || []);
    } catch (error) {
      console.error('Error fetching early bird subscribers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    try {
      const response = await fetch(`/api/early-bird/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSubscribers(prev => prev.filter(sub => sub.id !== id));
        setSelectedSubscribers(prev => prev.filter(id => id !== id));
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  const deleteSelected = async () => {
    if (!confirm(`Are you sure you want to delete ${selectedSubscribers.length} subscribers?`)) return;

    try {
      await Promise.all(
        selectedSubscribers.map(id => 
          fetch(`/api/early-bird/${id}`, { method: 'DELETE' })
        )
      );
      setSubscribers(prev => prev.filter(sub => !selectedSubscribers.includes(sub.id)));
      setSelectedSubscribers([]);
    } catch (error) {
      console.error('Error deleting subscribers:', error);
    }
  };

  const exportSubscribers = () => {
    const csvContent = [
      'Email,Date Subscribed',
      ...subscribers.map(sub => `${sub.email},${new Date(sub.createdAt).toLocaleDateString()}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `early-bird-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = () => {
    if (selectedSubscribers.length === filteredSubscribers.length) {
      setSelectedSubscribers([]);
    } else {
      setSelectedSubscribers(filteredSubscribers.map(sub => sub.id));
    }
  };

  const handleSelectSubscriber = (id: string) => {
    setSelectedSubscribers(prev => 
      prev.includes(id) 
        ? prev.filter(subId => subId !== id)
        : [...prev, id]
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Early Bird Subscribers</h1>
          <p className="text-gray-600">Manage early bird subscription list</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={exportSubscribers}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
              <p className="text-2xl font-semibold text-gray-900">{subscribers.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-semibold text-gray-900">
                {subscribers.filter(sub => {
                  const subDate = new Date(sub.createdAt);
                  const now = new Date();
                  return subDate.getMonth() === now.getMonth() && subDate.getFullYear() === now.getFullYear();
                }).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-500">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Selected</p>
              <p className="text-2xl font-semibold text-gray-900">{selectedSubscribers.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search subscribers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {selectedSubscribers.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {selectedSubscribers.length} selected
              </span>
              <button
                onClick={deleteSelected}
                className="flex items-center px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Subscribers ({filteredSubscribers.length})
            </h3>
            <button
              onClick={handleSelectAll}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {selectedSubscribers.length === filteredSubscribers.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredSubscribers.map((subscriber) => (
            <div
              key={subscriber.id}
              className={`p-6 hover:bg-gray-50 ${
                selectedSubscribers.includes(subscriber.id) ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedSubscribers.includes(subscriber.id)}
                    onChange={() => handleSelectSubscriber(subscriber.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{subscriber.email}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(subscriber.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => deleteSubscriber(subscriber.id)}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSubscribers.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            {searchTerm ? 'No subscribers found matching your search.' : 'No early bird subscribers yet.'}
          </div>
        )}
      </div>
    </div>
  );
}
