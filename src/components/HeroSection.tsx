import {
  Calendar,
  Clock,
  Download,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { downloadBrochure } from "../utils/download";

const HeroSection = () => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "GRI Certified Sustainability Professional Training";

  const videoPath = "/cover-video-2.mp4";

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:?subject=${encodeURIComponent(
        shareTitle
      )}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-navy to-primary text-white">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-padding pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
              Limited Seats Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              GRI Certified Sustainability Professional Training
            </h1>
            <div className="flex flex-wrap items-center text-xl mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-6 w-6 mr-2" />
                <span>29 Jun - 2 Jul 2025</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-6 w-6 mr-2" />
                <span>9:00 AM - 5:00 PM (GMT+3)</span>
              </div>
              {/* <div className="flex items-center mb-2">
                <Users className="h-6 w-6 mr-2" />
                <span>Limited Seats</span>
              </div> */}
            </div>

            <p className="text-lg mb-8 text-white">
              Become a GRI Certified Sustainability Professional and lead the
              way in transparent, impactful, and globally aligned sustainability
              reporting. This hands-on training is designed to equip
              professionals with in-demand ESG skills and prepare them for
              official GRI certification.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#register">
                <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg text-lg">
                  Apply Now
                </button>
              </a>
              <button
                onClick={downloadBrochure}
                className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-lg font-bold transition flex items-center gap-2 text-lg"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </button>
            </div>
          </div>

          <div className="md:w-2/5">
            {/* Share buttons positioned above the card */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-3 bg-navy/40 backdrop-blur-sm rounded-full px-5 py-3 shadow-md">
                <div className="flex items-center mr-2">
                  <Share2 className="h-6 w-6 mr-2" />
                  <span className="text-base font-medium">Share</span>
                </div>
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 hover:bg-white/20 rounded-full transition-colors"
                    title={`Share on ${link.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(link.url, "_blank", "width=600,height=400");
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-navy/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <CountdownTimer targetDate="2025-06-29T09:00:00" />
              <div className="text-center mt-6">
                <p className="text-white mb-4">
                  Secure your spot before registration closes
                </p>
                <button className="w-full px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg text-xl">
                  Reserve Your Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
