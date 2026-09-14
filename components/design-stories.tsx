"use client"

import Image from "next/image"
import { PopTitle } from "@/components/pop-title"

type StoryItem = {
  type: "image" | "video"
  src: string
  href: string
  platform: "instagram" | "facebook"
  alt: string
}

const stories: StoryItem[] = [
  {
    type: "image",
    src: "/design-stories/living-room.jpg",
    href: "https://www.instagram.com/mobenia_furniture/",
    platform: "instagram",
    alt: "Modern living room styling",
  },
  {
    type: "image",
    src: "/design-stories/kitchen.jpg",
    href: "https://www.instagram.com/mobenia_furniture/",
    platform: "instagram",
    alt: "Modern kitchen styling",
  },
  {
    type: "video",
    src: "/design-stories/reel.mp4",
    href: "https://www.instagram.com/mobenia_furniture/",
    platform: "instagram",
    alt: "Styling reel",
  },
  {
    type: "image",
    src: "/design-stories/dining-room.jpg",
    href: "https://www.facebook.com/REPLACE_WITH_YOUR_PAGE",
    platform: "facebook",
    alt: "Dining room styling",
  },
]

function PlatformBadge({ platform }: { platform: "instagram" | "facebook" }) {
  return (
    <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
      {platform === "instagram" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
        </svg>
      )}
    </span>
  )
}

export function DesignStories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-sm text-neutral-600">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
          Design Stories
        </span>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          <PopTitle text="Modern Living Inspirations" />
        </h2>
      </div>

      <div
        data-lenis-prevent
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[2/3] w-[45%] shrink-0 snap-center overflow-hidden rounded-2xl border border-black/5 shadow-sm md:aspect-[3/4] md:w-auto md:shrink md:snap-none"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                aria-label={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 25vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <PlatformBadge platform={item.platform} />
          </a>
        ))}
      </div>
    </section>
  )
}
