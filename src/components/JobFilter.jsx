import React from 'react';
import { Filter } from 'lucide-react';
import Button from './ui/Button';

const JobFilter = ({ filters, onFilterChange, onClearFilters }) => {
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Remote', 'Internship'];
  const locations = ['All', 'Remote', 'San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Los Angeles, CA'];
  const sortOptions = ['Newest', 'Salary (High to Low)', 'Company A-Z'];

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-white mr-2" />
        <h3 className="text-lg font-semibold text-white">Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-800 text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {locations.map((location) => (
              <option key={location} value={location} className="bg-gray-800 text-white">
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
          <select
            value={filters.sort}
            onChange={(e) => onFilterChange('sort', e.target.value)}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option} className="bg-gray-800 text-white">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <Button
          variant="secondary"
          size="sm"
          onClick={onClearFilters}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilter;