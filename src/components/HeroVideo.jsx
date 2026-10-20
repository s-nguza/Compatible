import { useEffect, useRef, useState } from 'react';

// Compressed 720p copies of src/assets/Backgroundvideos, served from public/videos.
const CLIPS = ['showroom', 'workshop', 'mechanic', 'interior'];
const FADE_MS = 600;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Decorative background for a hero: plays every clip in turn, starting with `start`,
// cross-fading between them. Pauses while off screen; reduced-motion users get the poster only.
export default function HeroVideo({ start = CLIPS[0] }) {
  const first = Math.max(CLIPS.indexOf(start), 0);
  const playlist = [...CLIPS.slice(first), ...CLIPS.slice(0, first)];

  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  // Starts visible so the poster frame shows while the first clip loads; only fades between clips.
  const [visible, setVisible] = useState(true);
  const [still] = useState(prefersReducedMotion);

  const clip = playlist[index];

  // Pause when the hero scrolls out of view to save battery and bandwidth.
  // Observes the wrapper because the <video> element is replaced for each clip.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || still) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      if (!video) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [still]);

  const handleEnded = () => {
    setVisible(false);
    window.setTimeout(() => setIndex((i) => (i + 1) % playlist.length), FADE_MS);
  };

  return (
    <div ref={wrapRef} className="hero-video" aria-hidden="true">
      {still ? (
        <img src={`/videos/${clip}.jpg`} alt="" className="hero-video__media is-visible" />
      ) : (
        <video
          ref={videoRef}
          key={clip}
          className={`hero-video__media ${visible ? 'is-visible' : ''}`}
          src={`/videos/${clip}.mp4`}
          poster={`/videos/${clip}.jpg`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onPlaying={() => setVisible(true)}
          onEnded={handleEnded}
        />
      )}
      <div className="hero-video__overlay" />
    </div>
  );
}
