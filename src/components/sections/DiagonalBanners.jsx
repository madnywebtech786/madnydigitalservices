'use client';

import { motion } from 'framer-motion';

export default function DiagonalBanners({ data }) {
  const d = data || {};
  const bannerText1 = d.text1 || 'Best in Canada • Website Development • Cell Phone Repair •  ';
  const bannerText2 = d.text2 || 'Premium Products • Premium Services • Best Prices •';

  // Repeat the text to create seamless loop
  const repeatedText1 = bannerText1.repeat(10);
  const repeatedText2 = bannerText2.repeat(10);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white bg-fixed">
      {/* Container for diagonal banners */}
      <div className="relative w-full h-64 md:h-72 lg:h-80">
        {/* Banner 1: Top-Left to Bottom-Right (Primary/50) */}
        <motion.div
          className="absolute top-0 left-0 w-[180%] md:w-[140%] lg:w-[120%] h-20 md:h-24 lg:h-28 bg-gradient-to-r from-primary/50 to-secondary/50 text-white"
          style={{
            transformOrigin: 'top left',
            transform: 'rotate(12deg)',
          }}
        >
          <div className="relative w-full h-full overflow-hidden flex items-center">
            <motion.div
              animate={{
                x: ['-50%', '0%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex whitespace-nowrap"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 px-8">
                {repeatedText2}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Banner 2: Top-Right to Bottom-Left (Gradient) */}
        <motion.div
          className="absolute top-0 right-0 w-[180%] md:w-[140%] lg:w-[120%] h-20 md:h-24 lg:h-28 bg-gradient-to-r from-primary to-secondary text-white "
          style={{
            transformOrigin: 'top right',
            transform: 'rotate(-12deg)',
            zIndex: 10,
          }}
        >
          <div className="relative w-full h-full overflow-hidden flex items-center">
            <motion.div
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex whitespace-nowrap"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white px-8">
                {repeatedText1}
              </span>
            </motion.div>
          </div>
        </motion.div>

      
      </div>

      {/* Mobile Optimization */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.top-0.left-0,
          .absolute.top-0.right-0 {
            width: 220% !important;
          }
        }
        @media (max-width: 640px) {
          .absolute.top-0.left-0,
          .absolute.top-0.right-0 {
            width: 280% !important;
          }
        }
      `}</style>
    </section>
  );
}
