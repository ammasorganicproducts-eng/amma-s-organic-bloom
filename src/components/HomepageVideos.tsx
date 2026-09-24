import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";

const VIDEOS = [
  { id: 1, src: video1, title: "Amma's Organic Products" },
  { id: 2, src: video2, title: "Natural Goodness" },
  { id: 3, src: video3, title: "Made With Care" },
];

function VideoCard({ src, title, index }: (typeof VIDEOS)[number] & { index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);
    if (video.paused) {
      video.muted = false;
      setIsMuted(false);
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    setHasInteracted(true);
    if (!nextMuted && video.paused) void video.play();
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasInteracted(true);
    void video.requestFullscreen?.();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-gold/25 bg-ivory p-2 shadow-[0_12px_35px_color-mix(in_oklab,var(--emerald-deep)_10%,transparent)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_42px_color-mix(in_oklab,var(--emerald-deep)_16%,transparent)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-emerald-dark">
        <video
          ref={videoRef}
          src={src}
          title={title}
          autoPlay
          muted
          loop
          playsInline
          controls={hasInteracted}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
          onClick={togglePlayback}
          className="h-full w-full cursor-pointer object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {!hasInteracted && (
          <button
            type="button"
            aria-label="Play video"
            onClick={togglePlayback}
            className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-emerald-dark/75 text-cream shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-110"
          >
            <Play size={21} fill="currentColor" />
          </button>
        )}
        <button
          type="button"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          onClick={toggleMute}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-emerald-dark/75 text-cream shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <button
          type="button"
          aria-label="Fullscreen"
          onClick={enterFullscreen}
          className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-emerald-dark/75 text-cream shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
        >
          <Maximize2 size={15} />
        </button>
        {hasInteracted && (
          <button
            type="button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            onClick={togglePlayback}
            className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-emerald-dark/75 text-cream shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
          >
            {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
          </button>
        )}
      </div>
      <p className="px-2 pb-2 pt-3 font-display text-lg text-primary">{title}</p>
    </motion.article>
  );
}

export function HomepageVideos() {
  return (
    <section className="homepage-section-pad overflow-hidden bg-cream">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Moments from Amma's"
          title="From Amma's World"
          subtitle="Watch our journey, products and moments of natural goodness."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VIDEOS.map((video, index) => (
            <VideoCard key={video.id} {...video} index={index} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link to="/gallery" className="btn-base btn-outline-gold text-primary">
            Explore Our Gallery <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}