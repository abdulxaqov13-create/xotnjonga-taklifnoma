/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function App() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    // Yaqin masofaga qochish mantiqi: kichikroq radiusda sakrash
    const range = 120; // 120 piksel radius ichida
    const x = (Math.random() - 0.5) * range * 2;
    const y = (Math.random() - 0.5) * range * 2;
    setNoButtonPos({ x, y });
  };

  const handleYes = () => {
    setIsAccepted(true);
  };

  if (!showInvite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-soft p-4 font-serif">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-accent flex justify-center"
          >
            <Heart size={64} fill="currentColor" className="opacity-40" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display italic text-accent leading-tight">
            Siz uchun maxsus maktub bor...
          </h1>
          
          <button
            onClick={() => setShowInvite(true)}
            className="px-12 py-3 bg-accent text-white rounded-full font-sans tracking-widest text-sm uppercase font-bold shadow-lg hover:brightness-110 transition-all cursor-pointer"
          >
            Maktubni ochish
          </button>
        </motion.div>
      </div>
    );
  }

  if (isAccepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 relative overflow-hidden text-center font-serif">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-8"
        >
          <div className="text-9xl mb-8 animate-bounce">💍</div>
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">UAYYY! ❤️</h1>
          <p className="text-2xl md:text-3xl text-gray-500 italic max-w-xl mx-auto">
            Sizni dunyodagi eng baxtli inson qilishga va'da beraman!
          </p>
          
          <div className="mt-12 flex justify-center gap-6">
            <div className="w-3 h-3 bg-pink-300 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-rose-400 rounded-full animate-ping [animation-delay:200ms]"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-ping [animation-delay:400ms]"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-soft p-4 relative overflow-hidden font-serif">
      <motion.div
        layout
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="geometric-card p-12 md:p-20 text-center max-w-2xl w-full relative z-10"
      >
        {/* Geometric Corners */}
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>

        <div className="mb-8 text-accent opacity-80 flex justify-center">
          <Heart size={48} fill="currentColor" />
        </div>

        <h1 className="text-4xl italic text-accent mb-6 leading-tight">Jonim Xotinjonim,</h1>
        
        <div className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto space-y-4 font-serif italic">
          <p>
            Har bir soniyam siz bilan mazmunli va baxtga to‘la. Siz bilan o‘tgan har bir lahza yuragimda eng go‘zal xotiraga aylanadi.
          </p>
          <p>
            Sizning tabassumingiz — mening eng katta quvonchim, borligingiz esa hayotimning eng bebaho ne’mati.
          </p>
          <p>
            Kelajagimizni birga, qo‘l ushlashib, orzular sari odimlashni istayman. Har bir qadamimizda bir-birimizga suyanch va madad bo‘laylik.
          </p>
          <p>
            Siz bilan har kun yangi bir hikoya — muhabbat, ishonch va sadoqat bilan yoziladigan eng go‘zal hikoya bo‘lishini xohlayman.
          </p>
          <p>
            Siz mening qalbimdagi eng iliq tuyg‘ular, tinchligim va ilhomimsiz.
          </p>
        </div>

        <h2 className="text-2xl font-bold tracking-widest text-accent-deep mb-12 uppercase">
          Menga turmushga chiqasizmi?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 relative h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="px-12 py-3 bg-accent text-white rounded-full text-lg font-bold tracking-wider shadow-lg hover:brightness-110 transition-all z-20"
          >
            HA
          </motion.button>

          <div className="w-32 flex items-center justify-center">
            <motion.button
              ref={noButtonRef}
              animate={{ 
                x: noButtonPos.x, 
                y: noButtonPos.y 
              }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              onMouseEnter={handleNoHover}
              className="relative px-10 py-3 border-2 border-accent text-accent rounded-full text-lg font-bold bg-white/50 backdrop-blur-sm shadow-sm"
            >
              YO'Q
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Background Floating Hearts */}
      {[...Array(12)].map((_, i) => (
        <Heart 
          key={i}
          className="absolute text-accent opacity-5 pointer-events-none"
          size={24 + (i % 3) * 12}
          style={{
            top: `${(i * 17) % 90}%`,
            left: `${(i * 13) % 90}%`,
            transform: `rotate(${(i * 45) % 360}deg)`
          }}
        />
      ))}
    </div>
  );
}
