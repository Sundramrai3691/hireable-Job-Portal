import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Briefcase, Building, MapPin, Clock } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    skills: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobTypes = ['Full-time', 'Part-time', 'Remote', 'Internship'];
  const locations = [
    'Remote',
    'San Francisco, CA',
    'New York, NY',
    'Seattle, WA',
    'Austin, TX',
    'Los Angeles, CA',
    'Chicago, IL',
    'Boston, MA',
    'Denver, CO',
    'Miami, FL'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Job title is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Job description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Job description must be at least 50 characters';
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'Required skills are needed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Job posted:', {
        ...formData,
        id: Date.now(),
        posted: 'Just now',
        skills: formData.skills.split(',').map(skill => skill.trim())
      });

      toast.success(`Job "${formData.title}" at ${formData.company} posted successfully!`, {
        duration: 4000,
        position: 'top-center',
      });

      // Reset form
      setFormData({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        salary: '',
        skills: '',
        description: ''
      });

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = () => {
    const requiredFields = ['title', 'company', 'location', 'description', 'skills'];
    const filledFields = requiredFields.filter(field => formData[field].trim()).length;
    return (filledFields / requiredFields.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Post a Job</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect candidate for your team. It's free and takes just a few minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Form Progress</span>
                  <span className="text-sm font-medium text-gray-300">{Math.round(progressPercentage())}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage()}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Job Title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Frontend Developer"
                    required
                    error={errors.title}
                  />

                  <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Google"
                    required
                    error={errors.company}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 border-white/20 text-white transition-all duration-200 ${errors.location ? 'border-red-500 focus:ring-red-500' : ''}`}
                    >
                      <option value="" className="bg-gray-800">Select location</option>
                      {locations.map(location => (
                        <option key={location} value={location} className="bg-gray-800">
                          {location}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 border-white/20 text-white transition-all duration-200"
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type} className="bg-gray-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Input
                  label="Salary Range"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g. $80,000 - $120,000"
                />

                <Input
                  label="Required Skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g. React, TypeScript, Node.js (comma separated)"
                  required
                  error={errors.skills}
                />

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Describe the role, responsibilities, requirements, and what makes this opportunity exciting..."
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 border-white/20 text-white placeholder-gray-300 transition-all duration-200 ${errors.description ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.description && (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    )}
                    <p className="text-sm text-gray-400 ml-auto">
                      {formData.description.length} characters
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Posting Job...' : 'Post Job'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">
                      {formData.title || 'Job Title'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">
                      {formData.company || 'Company Name'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">
                      {formData.location || 'Location'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      formData.type === 'Full-time' 
                        ? 'bg-green-100 text-green-800'
                        : formData.type === 'Part-time'
                        ? 'bg-blue-100 text-blue-800'
                        : formData.type === 'Remote'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {formData.type}
                    </span>
                  </div>

                  {formData.salary && (
                    <div className="text-gray-300">
                      <strong>Salary:</strong> {formData.salary}
                    </div>
                  )}

                  {formData.skills && (
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {formData.skills.split(',').map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.description && (
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Description:</div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {formData.description.length > 100 
                          ? `${formData.description.substring(0, 100)}...`
                          : formData.description
                        }
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;