import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, X, Maximize2 } from 'lucide-react';
import { createPortal } from 'react-dom';

// Video Imports
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';
import vid6 from '../assets/videos/vid6.mp4';
import vid7 from '../assets/videos/vid7.mp4';

const Portfolio = ({ previewOnly = false }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Disable scroll when video is active
  React.useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      window.lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.lenis?.start();
    };
  }, [activeVideo]);

  const allVideos = [
    { url: vid1, title: 'Combat Precision', category: 'Training' },
    { url: vid2, title: 'Elite Conditioning', category: 'Strength' },
    { url: vid3, title: 'Tactical Drills', category: 'Combat' },
    { url: vid4, title: 'The Syndicate Method', category: 'Training' },
    { url: vid5, title: 'Power Forging', category: 'Strength' },
    { url: vid6, title: 'Kinetic Mastery', category: 'Combat' },
    { url: vid7, title: 'Facility Tour', category: 'Facility' },
  ];

  const videos = previewOnly ? allVideos.slice(0, 4) : allVideos;

  return (
    <section id="portfolio" className="py-24 bg-[#061E29] relative overflow-hidden">
      {/* Background Decor */}
      {!previewOnly && (
        <h2 className="absolute top-20 right-[-5%] text-[15rem] md:text-[25rem] font-display font-black text-white/[0.02] leading-none uppercase italic select-none pointer-events-none">
          REELS
        </h2>
      )}

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-12 md:space-y-0">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-teal" />
              <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">CINEMATIC GALLERY</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-none">
              LIVE <br /> <span className="text-stroke">MOMENTUM</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {videos.map((vid, i) => (
              <VideoCard
                key={vid.url}
                vid={vid}
                index={i}
                onExpand={() => setActiveVideo(vid)}
              />
            ))}
          </AnimatePresence>
        </div>

        {previewOnly && (
          <div className="mt-20 flex justify-center">
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border border-brand-teal/30 text-brand-teal font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-teal hover:text-brand-deep transition-all duration-500"
              >
                VIEW FULL ARCHIVE
              </motion.button>
            </Link>
          </div>
        )}
      </div>

      {/* Video Lightbox - Using Portal for Viewport-Absolute Stability */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              data-lenis-prevent
              className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-3xl"
            >
              {/* Ultra-Visible Exit Control - Fixed to Viewport and ALWAYS visible regardless of scroll */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed top-6 right-6 md:top-12 md:right-12 z-[2100] flex items-center gap-6"
              >
                <span className="text-brand-teal font-black text-[12px] uppercase tracking-[0.6em] hidden md:block drop-shadow-2xl">Exit Archive</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-brand-teal border border-brand-teal shadow-[0_0_60px_rgba(95,149,152,0.6)] rounded-full flex items-center justify-center group active:scale-95 transition-all duration-300"
                >
                  <X size={40} className="text-brand-deep transition-transform group-hover:rotate-180 duration-500 scale-110" />
                </button>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black shadow-[0_0_150px_rgba(0,0,0,1)] overflow-hidden border border-white/5"
              >
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                  <span className="text-brand-teal font-black uppercase tracking-widest text-[10px] mb-4 block">{activeVideo.category}</span>
                  <h3 className="text-4xl font-display font-black text-white italic uppercase tracking-tighter leading-none">{activeVideo.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

const VideoCard = ({ vid, index, onExpand }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group overflow-hidden bg-[#0a2530] border border-white/5 cursor-pointer ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
        }`}
      onClick={onExpand}
    >
      <div className="aspect-square w-full h-full relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-40 group-hover:opacity-0 transition-opacity">
          <Play fill="currentColor" size={48} className="text-white/20" />
        </div>

        <video
          ref={videoRef}
          src={vid.url}
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />

        <div className="absolute inset-0 z-30 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-brand-teal text-[9px] font-black uppercase tracking-[0.4em] block mb-2">
                {vid.category}
              </span>
              <h4 className="text-2xl font-display font-black text-white italic leading-tight uppercase">
                {vid.title}
              </h4>
            </div>
            <Maximize2 size={24} className="text-brand-teal mb-1" />
          </div>
        </div>

        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 group-hover:border-brand-teal transition-colors z-30" />
      </div>
    </motion.div>
  );
};

export default Portfolio;
