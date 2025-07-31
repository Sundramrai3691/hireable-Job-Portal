import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, TrendingUp, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CompanyCarousel from '../components/CompanyCarousel';
import FAQ from '../components/FAQ';

const Home = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "For Job Seekers",
      description: "Discover amazing opportunities from top companies. Filter by location, salary, and job type to find your perfect match.",
      link: "/jobs"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      title: "For Employers",
      description: "Post jobs for free and connect with talented professionals. Reach thousands of qualified candidates instantly.",
      link: "/post-job"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Career Growth",
      description: "Access resources and opportunities that help you advance your career and reach your professional goals.",
      link: "/jobs"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Trusted Platform",
      description: "Join a community of professionals and companies committed to creating meaningful career connections.",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Find Your Dream Job</span>
              <br />
              <span className="text-white">Or Perfect Candidate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with top companies and talented professionals. Whether you're looking for your next opportunity or seeking great talent, Hireable makes it simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/jobs">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Browse Jobs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Carousel */}
      <CompanyCarousel />

      {/* Feature Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Hireable?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're dedicated to making job searching and hiring simple, effective, and rewarding for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card hover className="p-6 text-center h-full flex flex-col bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10,000+</div>
              <div className="text-gray-300">Active Job Listings</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">5,000+</div>
              <div className="text-gray-300">Companies Trust Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50,000+</div>
              <div className="text-gray-300">Successful Hires</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals and companies already using Hireable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button variant="primary" size="lg">
                  Find Jobs Now
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="secondary" size="lg">
                  Post Your First Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;