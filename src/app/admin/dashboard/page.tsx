'use client';

import { useEffect, useState } from 'react';
import { Users, Mail, FileText, Newspaper, TrendingUp, Eye } from 'lucide-react';

interface DashboardStats {
  totalContacts: number;
  totalNewsletter: number;
  totalBlogs: number;
  totalEarlyBird: number;
  recentContacts: any[];
  recentNewsletter: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalNewsletter: 0,
    totalBlogs: 0,
    totalEarlyBird: 0,
    recentContacts: [],
    recentNewsletter: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, newsletterRes, blogsRes, earlyBirdRes] = await Promise.all([
          fetch('/api/contacts'),
          fetch('/api/newsletter'),
          fetch('/api/blog'),
          fetch('/api/early-bird')
        ]);

        const [contacts, newsletter, blogs, earlyBird] = await Promise.all([
          contactsRes.json(),
          newsletterRes.json(),
          blogsRes.json(),
          earlyBirdRes.json()
        ]);

        setStats({
          totalContacts: contacts.items?.length || 0,
          totalNewsletter: newsletter.items?.length || 0,
          totalBlogs: blogs.items?.length || 0,
          totalEarlyBird: earlyBird.items?.length || 0,
          recentContacts: contacts.items?.slice(0, 5) || [],
          recentNewsletter: newsletter.items?.slice(0, 5) || []
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: Mail,
      color: 'bg-blue-500',
      href: '/admin/contacts'
    },
    {
      title: 'Newsletter Subscribers',
      value: stats.totalNewsletter,
      icon: Newspaper,
      color: 'bg-green-500',
      href: '/admin/newsletter'
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogs,
      icon: FileText,
      color: 'bg-purple-500',
      href: '/admin/blogs'
    },
    {
      title: 'Early Bird Subscribers',
      value: stats.totalEarlyBird,
      icon: Users,
      color: 'bg-orange-500',
      href: '/admin/early-bird'
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Fielduo Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${card.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Contacts</h3>
          </div>
          <div className="p-6">
            {stats.recentContacts.length > 0 ? (
              <div className="space-y-4">
                {stats.recentContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{contact.name || 'Anonymous'}</p>
                      <p className="text-sm text-gray-500">{contact.email}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No recent contacts</p>
            )}
          </div>
        </div>

        {/* Recent Newsletter Subscribers */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Newsletter Subscribers</h3>
          </div>
          <div className="p-6">
            {stats.recentNewsletter.length > 0 ? (
              <div className="space-y-4">
                {stats.recentNewsletter.map((subscriber, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{subscriber.email}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(subscriber.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No recent subscribers</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
