import React from 'react';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Card from './ui/Card';
import Button from './ui/Button';

const JobCard = ({ job }) => {
  const handleApply = () => {
    toast.success(`Application submitted for ${job.title} at ${job.company}!`, {
      duration: 3000,
      position: 'top-center',
    });
  };

  return (
    <Card hover className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {job.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {job.company}
            </p>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          job.type === 'Full-time' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : job.type === 'Part-time'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            : job.type === 'Remote'
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
            : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
        }`}>
          {job.type}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1">
        {job.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <DollarSign className="w-4 h-4 mr-2" />
          {job.salary}
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          {job.posted}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Button 
        variant="primary" 
        className="w-full mt-auto"
        onClick={handleApply}
      >
        Apply Now
      </Button>
    </Card>
  );
};

export default JobCard;