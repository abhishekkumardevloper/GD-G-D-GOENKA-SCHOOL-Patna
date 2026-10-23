import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { NEWS_EVENTS_DATA } from '../data/newsEventsData';

export const NewsEventsPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Academics', 'Sports', 'Campus Life', 'Events', 'Celebrations'];

  const filteredNews = NEWS_EVENTS_DATA.filter((article) => {
    const matchesTag = selectedTag === 'All' || article.category === selectedTag;
    const matchesSearch = searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'News & Events' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Campus Chronicle
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              School News, Updates & Events
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Celebrate student breakthroughs, academic exhibitions, athletic achievements, and institutional announcements at G D Goenka Public School, Patna.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-charcoal-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search news & events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200/80 hover:shadow-elevated transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-900/90 text-gold-400 backdrop-blur-sm">
                      <Tag className="w-3 h-3" />
                      <span>{article.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 group-hover:text-royal-600 transition-colors line-clamp-2 mb-3">
                      <Link to={`/news-events/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={`/news-events/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 hover:text-navy-900 transition-colors uppercase tracking-wider"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <h4 className="text-base font-bold text-navy-900">No matching stories found</h4>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Try adjusting your search terms or selecting another category.
            </p>
            <button
              onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded bg-navy-900 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
