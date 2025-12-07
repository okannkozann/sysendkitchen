import React, { useState, useEffect, useRef } from 'react';
import { SLIDE_IMAGES, SLIDE_VIDEOS } from '../constants';

const MediaSplitSection: React.FC = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentVidIdx, setCurrentVidIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle Video Slide Change
  const handleVideoChange = (direction: 'next' | 'prev') => {
    setCurrentVidIdx((prev) => {
      if (direction === 'next') return (prev + 1) % SLIDE_VIDEOS.length;
      return (prev - 1 + SLIDE_VIDEOS.length) % SLIDE_VIDEOS.length;
    });
  };

  // Ensure current video plays/pauses when index or play state changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentVidIdx && isPlaying) {
        // try play from start
        try {
          video.currentTime = 0;
        } catch (e) {}
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play prevented
          });
        }
      } else {
        try {
          video.pause();
        } catch (e) {}
      }
    });
  }, [currentVidIdx, isPlaying]);

  // Auto-advance videos when playing
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrentVidIdx((prev) => (prev + 1) % SLIDE_VIDEOS.length);
    }, 8000);
    return () => clearInterval(id);
  }, [isPlaying]);

  return (
    <section className="relative w-full bg-transparent py-16 px-4 md:px-8 -mt-20 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT: Photo Slider */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 group bg-white">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sys-navy uppercase tracking-wider shadow-sm">
                Galeri
            </div>
            
            {SLIDE_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentImgIdx ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]"
              />
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                <p className="text-slate-200 text-sm">{img.alt}</p>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2 z-20">
            {SLIDE_IMAGES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentImgIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImgIdx ? 'w-8 bg-sys-accent' : 'w-2 bg-white/50'}`}
                />
            ))}
          </div>
        </div>

        {/* RIGHT: Video Slider */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white group">
            <div className="absolute top-4 left-4 z-10 bg-sys-accent/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                Video Turu
            </div>

            {/* Video Canvas */}
            <div className="relative w-full h-full bg-sys-navy">
                {SLIDE_VIDEOS.map((video, idx) => (
                    <div 
                        key={video.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${idx === currentVidIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <video
                            ref={(el) => { videoRefs.current[idx] = el; }}
                            src={video.url}
                            poster={video.poster}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                        
                         {/* Video Content */}
                         <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h3 className="text-xl font-bold text-white">{video.title}</h3>
                         </div>
                    </div>
                ))}
            </div>

            {/* Controls: dot indicators only */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center z-20">
              <div className="flex items-center gap-2">
                {SLIDE_VIDEOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentVidIdx(idx); setIsPlaying(true); }}
                    aria-label={`Go to video ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 ${idx === currentVidIdx ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MediaSplitSection;