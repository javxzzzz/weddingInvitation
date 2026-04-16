import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EnvelopeAnimation } from './components/EnvelopeAnimation';
import { Navigation } from './components/Navigation';
import { MusicControl } from './components/MusicControl';
import { HeroSection } from './components/HeroSection';
import { OurStory } from './components/OurStory';
import { EventDetails } from './components/EventDetails';
import { MapSection } from './components/MapSection';
import { DressCode } from './components/DressCode';
import { RSVPForm } from './components/RSVPForm';
import { Gallery } from './components/Gallery';
import { Guestbook } from './components/Guestbook';
import { ImportantNotes } from './components/ImportantNotes';
import { Footer } from './components/Footer';
export function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [pendingAutoPlay, setPendingAutoPlay] = useState(false);
  const youtubePlayerRef = useRef<HTMLIFrameElement | null>(null);
  const youtubeVideoId = '-c1s2l4xUtI';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=0&loop=1&playlist=${youtubeVideoId}&controls=0&rel=0&modestbranding=1`;

  const postYouTubeCommand = (func: string, args: (number | string)[] = []) => {
    const player = youtubePlayerRef.current;
    if (!player?.contentWindow) return;
    player.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args
      }),
      '*'
    );
  };

  const handleToggleMusic = () => {
    if (!playerReady) return;
    if (musicPlaying) {
      postYouTubeCommand('pauseVideo');
      setMusicPlaying(false);
      return;
    }
    postYouTubeCommand('unMute');
    postYouTubeCommand('setVolume', [35]);
    postYouTubeCommand('playVideo');
    setMusicPlaying(true);
  };

  const handleOpenInvitation = () => {
    setEnvelopeOpened(true);
    if (!playerReady) {
      setPendingAutoPlay(true);
      return;
    }
    postYouTubeCommand('unMute');
    postYouTubeCommand('setVolume', [35]);
    postYouTubeCommand('playVideo');
    setMusicPlaying(true);
  };

  useEffect(() => {
    if (!envelopeOpened || !playerReady || !pendingAutoPlay) return;
    postYouTubeCommand('unMute');
    postYouTubeCommand('setVolume', [35]);
    postYouTubeCommand('playVideo');
    setMusicPlaying(true);
    setPendingAutoPlay(false);
  }, [envelopeOpened, playerReady, pendingAutoPlay]);

  return (
    <div className="w-full min-h-screen bg-cream-50">
      <iframe
        ref={youtubePlayerRef}
        src={youtubeEmbedUrl}
        title="Wedding background music"
        allow="autoplay; encrypted-media"
        onLoad={() => setPlayerReady(true)}
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          border: 0,
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
      <AnimatePresence mode="wait">
        {!envelopeOpened &&
        <EnvelopeAnimation
          key="envelope"
          onOpen={handleOpenInvitation} />

        }
      </AnimatePresence>

      {envelopeOpened &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8
        }}>
        
          <Navigation />
          <MusicControl
          playing={musicPlaying}
          onToggle={handleToggleMusic} />
        
          <main>
            <HeroSection />
            <OurStory />
            <EventDetails />
            <MapSection />
            <DressCode />
            <RSVPForm />
            <Gallery />
            <Guestbook />
            <ImportantNotes />
          </main>
          <Footer />
        </motion.div>
      }
    </div>);

}
