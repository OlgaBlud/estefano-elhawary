import heroVideoPreview from "@/assets/page-home/hero-video-preview.avif";
import mainAvatar from "@/assets/page-home/main-avatar.avif";
import clientAvatar1 from "@/assets/page-home/avatar-1.avif";
import clientAvatar2 from "@/assets/page-home/avatar-2.avif";
import clientAvatar3 from "@/assets/page-home/avatar-3.avif";
import clientAvatar4 from "@/assets/page-home/avatar-4.avif";
import clientAvatar5 from "@/assets/page-home/avatar-5.avif";
import clientAvatar6 from "@/assets/page-home/avatar-6.avif";
// import stars from "@/assets/icons/stars.svg";
import playIcon from "@/assets/icons/play-icon.svg";

export const heroData = {
  title: "Täglich planbar vermögende Privatpersonen als Klienten gewinnen",

  text: "Wir übernehmen dein gesamtes Marketing auf Beteiligungsbasis – und setzen unsere in der Schweiz entwickelte KI-Software ein, um Vermögende zu identifizieren und systematisch als Klienten zu gewinnen.",
  video: {
    poster: heroVideoPreview,
    alt: "Video preview",
  },

  cta: {
    label: "Strategiegespräch sichern",
    href: "#",
  },
  metaList: ["45 Minuten", "Kein Pitch", "Nur Analyse", "Du entscheidest danach"],
  avatarMain: {
    src: mainAvatar,
    alt: "Estefano Elhawary",
  },

  avatarsClients: [
    {
      src: clientAvatar1,
      alt: "Client",
    },
    {
      src: clientAvatar2,
      alt: "Client",
    },
    {
      src: clientAvatar3,
      alt: "Client",
    },
    {
      src: clientAvatar4,
      alt: "Client",
    },
    {
      src: clientAvatar5,
      alt: "Client",
    },
    {
      src: clientAvatar6,
      alt: "Client",
    },
  ],

  quote: "Estefano hat uns von 2 auf 27 Mio. € Umsatz in nur 14 Monaten gebracht",

  quoteAuthor: "C. Knote, CEO “Greenville”",

  quoteButton: {
    label: "Zum Video-Beweis",
    href: "#",
    icon: playIcon,
  },
};
