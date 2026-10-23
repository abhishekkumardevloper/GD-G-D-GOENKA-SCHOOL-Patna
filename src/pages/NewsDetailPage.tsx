import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Tag, User, ArrowLeft, Share2, Check, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { NEWS_EVENTS_DATA } from '../data/newsEventsData';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const article = NEWS_EVENTS_DATA.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-navy-900 font-heading mb-3">Article Not Found</h2>
        <p className="text-sm text-charcoal-600 mb-6">The news update or event you requested could not be located.</p>
        <Button to="/news-events" variant="navy" size="md">
          Return to News & Events
        </Button>
      </div>
    );
  }

  // Related stories (other articles)
  const relatedStories = NEWS_EVENTS_DATA.filter((item) => item.id !== article.id).slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-surface-200">
      {/* Article Header Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'News & Events', href: '/news-events' },
              { label: article.title },
            ]}
            className="text-slate-400 mb-4"
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
              <Tag className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-2 border-t border-navy-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>{article.date}</span>
              </div>
              {article.author && (
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-gold-400" />
                  <span>Posted by: {article.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white bg-slate-100">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        {/* Share & Back Controls */}
        <div className="flex items-center justify-between py-3 border-y border-slate-200 text-xs sm:text-sm">
          <Link
            to="/news-events"
            className="inline-flex items-center gap-1.5 font-semibold text-charcoal-700 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Stories</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-navy-900 font-semibold hover:bg-slate-50 transition-colors shadow-subtle cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-royal-600" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>

        {/* Article Paragraphs */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200 space-y-6 text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
          <p className="text-base sm:text-lg font-semibold text-navy-900 border-l-4 border-gold-500 pl-4 py-1 italic bg-gold-50/40">
            {article.excerpt}
          </p>

          {article.content.map((p, index) => (
            <p key={index}>
              {p}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-navy-900 uppercase">Tags:</span>
            {article.tags.map((t, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded bg-surface-200 text-charcoal-700 border border-slate-200">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading text-navy-900">
              Related Announcements & News
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedStories.map((rel) => (
                <div key={rel.id} className="bg-white rounded-xl p-5 shadow-card border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-gold-600">{rel.category}</span>
                    <h4 className="text-base font-bold font-heading text-navy-900 line-clamp-2 mt-1 mb-2">
                      <Link to={`/news-events/${rel.slug}`} className="hover:text-royal-600">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-charcoal-600 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      to={`/news-events/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-royal-600 hover:text-navy-900 uppercase"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
