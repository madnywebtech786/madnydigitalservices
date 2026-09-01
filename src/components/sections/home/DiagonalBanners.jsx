'use client';

export default function DiagonalBanners({ data }) {
  const d = data || {};
  const bannerText1 = d.text1 || 'Computer Systems Design ✦ Software and Hardware ✦ Data Recovery ✦ Web Development ✦ ECommerce Solutions ✦ Database Development ✦ SEO & Digital Marketing ✦ Computer Sales & Service ✦ Device Repair & Support ✦ Sales and Service ✦ ';
  const bannerText2 = d.text2 || 'Computer Systems Design ✦ Software and Hardware ✦ Data Recovery ✦ Web Development ✦ ECommerce Solutions ✦ Database Development ✦ SEO & Digital Marketing ✦ Computer Sales & Service ✦ Device Repair & Support ✦ Sales and Service ✦ ';

  const repeatedText1 = bannerText1.repeat(10);
  const repeatedText2 = bannerText2.repeat(10);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative w-full h-64 md:h-72 lg:h-80">

        {/* Banner 1: tilts top-left → bottom-right */}
        <div
          className="absolute top-0 left-0 w-[280%] sm:w-[220%] md:w-[140%] lg:w-[120%] h-20 md:h-24 lg:h-28 bg-linear-to-r from-primary/50 to-secondary/50"
          style={{ transformOrigin: 'top left', transform: 'rotate(12deg)' }}
        >
          <div className="relative w-full h-full overflow-hidden flex items-center">
            <div className="loop-marquee-rev flex whitespace-nowrap">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 px-8">
                {repeatedText2}
              </span>
            </div>
          </div>
        </div>

        {/* Banner 2: tilts top-right → bottom-left */}
        <div
          className="absolute top-0 right-0 w-[280%] sm:w-[220%] md:w-[140%] lg:w-[120%] h-20 md:h-24 lg:h-28 bg-linear-to-r from-primary to-secondary z-10"
          style={{ transformOrigin: 'top right', transform: 'rotate(-12deg)' }}
        >
          <div className="relative w-full h-full overflow-hidden flex items-center">
            <div className="loop-marquee-fwd flex whitespace-nowrap">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white px-8">
                {repeatedText1}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
