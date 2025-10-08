'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle, Clock } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  country: string;
  phone: string;
  message: string;
  status: 'pending' | 'done';
  createdAt: string;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'done'>('all');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      const data = await response.json();
      setContacts(data.items || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateContactStatus = async (id: string, status: 'pending' | 'done') => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setContacts(prev => 
          prev.map(contact => 
            contact.id === id ? { ...contact, status } : contact
          )
        );
        if (selectedContact?.id === id) {
          setSelectedContact({ ...selectedContact, status });
        }
      }
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const filteredContacts = contacts.filter(contact => 
    statusFilter === 'all' || contact.status === statusFilter
  );

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
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600">Manage contact form submissions</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Contacts</option>
            <option value="pending">Pending</option>
            <option value="done">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Messages ({filteredContacts.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-6 hover:bg-gray-50 cursor-pointer ${
                    selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          {contact.name || 'Anonymous'}
                        </h4>
                        {contact.status === 'done' ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{contact.email}</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{contact.subject}</p>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{contact.message}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-1">
          {selectedContact ? (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-sm text-gray-900">{selectedContact.name || 'Anonymous'}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <a 
                      href={`mailto:${selectedContact.email}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <a 
                      href={`tel:${selectedContact.phone}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {selectedContact.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Country</label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-900">{selectedContact.country || 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Subject</label>
                  <p className="text-sm text-gray-900">{selectedContact.subject}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Message</label>
                  <p className="text-sm text-gray-900 mt-1 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Date</label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-900">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => updateContactStatus(selectedContact.id, 'pending')}
                      className={`px-3 py-1 text-xs rounded-full ${
                        selectedContact.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-yellow-800'
                      }`}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => updateContactStatus(selectedContact.id, 'done')}
                      className={`px-3 py-1 text-xs rounded-full ${
                        selectedContact.status === 'done'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-800'
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-500">Select a contact to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
