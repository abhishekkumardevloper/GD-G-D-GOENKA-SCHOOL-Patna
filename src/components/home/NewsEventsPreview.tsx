import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { NEWS_EVENTS_DATA } from '../../data/newsEventsData';

export const NewsEventsPreview: React.FC = () => {
  // Take 3 latest news
  const latestNews = NEWS_EVENTS_DATA.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Announcements & Milestones"
            title="Latest Happenings at"
            highlightText="GD Goenka Patna"
            description="Stay connected with our campus celebrations, academic workshops, and student achievements."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button
              to="/news-events"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              All News & Announcements
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200/80 hover:shadow-elevated transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
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
      </div>
    </section>
  );
};
