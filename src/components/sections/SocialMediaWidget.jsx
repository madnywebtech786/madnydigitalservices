'use client';

export default function SocialMediaWidget({ data }) {
  const d = data || {};
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      {/* Main Widget Container */}
      <div className="relative">
        {/* Glassmorphism Container */}
        <div className="relative">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary-600/90 to-secondary/90 backdrop-blur-xl rounded-tl-3xl rounded-bl-3xl shadow-2xl"></div>

          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-400 to-secondary rounded-3xl opacity-50 blur-sm animate-pulse"></div>

          {/* Content */}
          <div className="relative pl-2 sm:pl-3 pr-1.5 sm:pr-2 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">

            {/* Social Media Icons */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {/* Facebook */}
              <a
                href={d.facebook || 'https://facebook.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Visit our Facebook page"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg border border-white/30">
                  <svg
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Facebook
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={d.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Visit our Instagram page"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg border border-white/30">
                  <svg
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Instagram
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={d.whatsapp || 'https://wa.me/1234567890'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Contact us on WhatsApp"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg border border-white/30">
                  <svg
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  WhatsApp
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
}
