import React, { useState } from 'react';
import { Play, Star, ShieldCheck, Quote, X, Sparkles, Video } from 'lucide-react';
import { VIDEO_TESTIMONIALS, WRITTEN_REVIEWS } from '../psychology-system/data';
import { VideoTestimonial } from '../psychology-system/types';

interface TestimonialsSectionProps {
  onOpenAuditModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenAuditModal }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  return (
    <section id="testimoniale" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Experiențe Reale</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ce spun psihologii cu care am lucrat
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Specialiști și cabinete individuale care au dorit o prezență clară, profesionistă și fără efort tehnic.
          </p>
        </div>

        {/* 1. Video Testimonials FIRST (as requested) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse" />
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-teal-600" />
                <span>Video Testimoniale &amp; Studii de Caz</span>
              </h3>
            </div>
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">
              Apasă pentru interviu
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Video Thumbnail Screen */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-teal-600 group-hover:bg-teal-500 group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-slate-200 text-[11px] font-mono px-2 py-0.5 rounded border border-slate-700">
                      {video.duration}
                    </div>

                    {/* Metric pill */}
                    <div className="absolute top-3 left-3 bg-teal-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      {video.keyMetric}
                    </div>
                  </div>

                  {/* Video Metadata */}
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-teal-700 transition-colors">
                      {video.name}
                    </h4>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {video.role} · {video.city}
                    </div>

                    <blockquote className="mt-4 text-xs sm:text-sm text-slate-600 italic leading-relaxed line-clamp-3">
                      „{video.highlightQuote}”
                    </blockquote>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-800">
                    <span className="uppercase tracking-wider">Vezi interviul</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Written Testimonials */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Recenzii de la Cabinete de Psihologie
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Feedback autentic primit după implementarea completă a sistemului
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {WRITTEN_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-teal-200 mb-2" />

                  {/* Exact prompt copy matching */}
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    „{review.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">
                    {review.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {review.credentials} · {review.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Notice Bar */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Testimoniale reale de la psihologi și cabinete autorizate COPSI.</span>
        </div>
      </div>

      {/* Video Modal Player when clicking a testimonial */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <h4 className="font-bold text-base text-white">{selectedVideo.name}</h4>
                <p className="text-xs text-slate-400">{selectedVideo.role} — {selectedVideo.city}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-slate-900">
              <div className="relative aspect-video rounded-xl bg-black flex items-center justify-center overflow-hidden border border-slate-800 mb-6">
                <img
                  src={selectedVideo.thumbnailUrl}
                  alt={selectedVideo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mb-3 shadow-lg">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {selectedVideo.videoPreview}
                  </span>
                  <span className="text-xs text-teal-400 font-mono mt-1">
                    Durată: {selectedVideo.duration}
                  </span>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60 text-xs sm:text-sm text-slate-200 italic mb-6">
                „{selectedVideo.highlightQuote}”
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-xs text-slate-400 hover:text-white uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Închide
                </button>
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    onOpenAuditModal();
                  }}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-colors"
                >
                  Solicită și tu analiza gratuită
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


