import React, { useState, useMemo } from 'react';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';
import JobFilter from '../components/JobFilter';
import jobsData from '../data/jobs.json';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'All',
    location: 'All',
    sort: 'Newest'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      type: 'All',
      location: 'All',
      sort: 'Newest'
    });
    setSearchTerm('');
  };

  const filteredJobs = useMemo(() => {
    let filtered = jobsData.filter(job => {
      // Search filter
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      // Type filter
      const matchesType = filters.type === 'All' || job.type === filters.type;

      // Location filter
      const matchesLocation = filters.location === 'All' || 
        job.location.includes(filters.location) ||
        (filters.location === 'Remote' && job.location === 'Remote');

      return matchesSearch && matchesType && matchesLocation;
    });

    // Sort jobs
    switch (filters.sort) {
      case 'Salary (High to Low)':
        filtered.sort((a, b) => {
          const salaryA = parseInt(a.salary.split('-')[1].replace(/[^0-9]/g, ''));
          const salaryB = parseInt(b.salary.split('-')[1].replace(/[^0-9]/g, ''));
          return salaryB - salaryA;
        });
        break;
      case 'Company A-Z':
        filtered.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'Newest':
      default:
        // Jobs are already sorted by newest in the JSON
        break;
    }

    return filtered;
  }, [jobsData, searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Find Your Next Opportunity</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse through {jobsData.length} available positions from top companies
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
          />
        </div>

        {/* Filters */}
        <JobFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            {filteredJobs.length === 0 
              ? 'No jobs found matching your criteria'
              : `Showing ${filteredJobs.length} of ${jobsData.length} jobs`
            }
          </p>
        </div>

        {/* Job Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <div className="glass-card p-12 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">No Jobs Found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or clearing filters to see more results.
              </p>
              <button
                onClick={handleClearFilters}
                className="btn-primary px-6 py-2"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;