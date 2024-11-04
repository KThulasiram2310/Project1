import React from 'react';
import { TrendingUp, Users, ShoppingBag, Activity } from 'lucide-react';

const stats = [
  {
    label: 'Active Trackers',
    value: '24',
    icon: Activity,
    color: 'bg-blue-500',
  },
  {
    label: 'Products Found',
    value: '1,234',
    icon: ShoppingBag,
    color: 'bg-purple-500',
  },
  {
    label: 'Social Reach',
    value: '2.1M',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    label: 'Trending Items',
    value: '89',
    icon: TrendingUp,
    color: 'bg-red-500',
  },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-bold">{stat.value}</span>
          </div>
          <h3 className="text-gray-600 font-medium">{stat.label}</h3>
        </div>
      ))}
    </div>
  );
}