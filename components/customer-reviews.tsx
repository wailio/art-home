'use client'

import { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const mobileReviews = [
  { author: "Adem", rating: 5, years: "il y a 4 mois", text: "" },
  { author: "Aura Mode", rating: 5, years: "il y a 5 mois", text: "" },
  { author: "Melissa Chikh chouk", rating: 5, years: "il y a 5 mois", text: "" },
  { author: "سميرة حموش", rating: 5, years: "il y a 5 mois", text: "" },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!isMobile || prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % mobileReviews.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    const card = container?.firstElementChild
    if (!container || !(card instanceof HTMLElement)) return

    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0
    const scrollAmount = card.getBoundingClientRect().width + gap
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  return (
    <section dir="ltr" id="offres" className="bg-[#0A0A0A] px-4 py-12 md:bg-[#f7f4ee] md:px-6 md:py-20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-4 flex h-auto items-start justify-center md:mb-0 md:h-auto">
            <h2 className="pt-4 text-center font-serif text-2xl font-bold text-[#F0EDE6] md:hidden md:pt-8 md:text-4xl">AVIS CLIENTS</h2>
            <div className="hidden w-full md:grid md:grid-cols-[0.95fr_1.15fr] md:items-center md:gap-16 lg:gap-24" aria-label="Avis clients">
              <div className="relative flex h-[430px] items-end justify-center overflow-hidden">
                <div className="absolute bottom-8 h-56 w-72 rounded-full bg-[#ebe5db]" aria-hidden="true" />
                <img src="/chair.png" alt="Fauteuil et décoration Art Home" className="relative z-10 h-[430px] w-full object-contain object-bottom drop-shadow-[0_18px_16px_rgba(90,65,40,0.12)]" />
              </div>
              <div className="pb-2">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ddd7cd] px-3 py-1.5 font-sans text-xs text-[#4c4a46]"><span className="h-1.5 w-1.5 rounded-full bg-[#b4883d]" aria-hidden="true" />Happy Customer</div>
                <h2 className="max-w-[540px] font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#171717] lg:text-[46px]">Beautiful Furniture Trusted By Modern Families</h2>
                <div className="mt-8 flex gap-1" aria-label="5 étoiles">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-[#b4883d] text-[#b4883d]" aria-hidden="true" />)}</div>
                <p className="mt-6 max-w-[540px] font-sans text-[15px] leading-6 text-[#5f5c57]">&quot;Premium craftsmanship, timeless designs, and outstanding customer service made this one of the best furniture purchases we&apos;ve ever made for our home interiors.&quot;</p>
                <div className="mt-12 border-t border-[#ddd7cd] pt-10">
                  <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b4883d] font-serif text-lg text-[#fffaf2]" aria-hidden="true">OB</div><div><p className="font-sans text-sm font-semibold text-[#202020]">Olivia Bennett</p><p className="mt-1 font-sans text-xs text-[#8b8780]">Homeowner</p></div><span className="ml-auto pr-2 font-serif text-7xl leading-none text-[#ebe5db]" aria-hidden="true">&quot;</span></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
        {/* Desktop - Horizontal Scroll with Mouse Hover Controls */}
        <div className="hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-hidden scroll-smooth px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {mobileReviews.map((review) => (
              <div key={review.author} className="flex h-52 w-[calc((100%-3.75rem)/4)] shrink-0 flex-col items-start border border-[#292929] bg-[#151515] px-6 py-6 text-left">
                <div className="mb-5 flex gap-1" aria-label={`${review.rating} étoiles`}>
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-4 w-4 fill-[#b4883d] text-[#b4883d]" aria-hidden="true" />)}
                </div>
                <p className="font-sans text-sm leading-6 text-[#d0d0d0]">&quot;{review.text}&quot;</p>
                <div className="mt-auto"><p className="font-sans text-sm font-bold text-[#F0EDE6]">{review.author}</p><p className="font-sans text-xs text-[#807b72]">{review.years}</p></div>
              </div>
            ))}
          </div>

          {/* Hover Controls - Left */}
          <button
            onClick={() => scroll('left')}
            aria-label="Avis précédents"
            className="absolute left-0 top-1/2 z-10 -translate-x-[150%] -translate-y-1/2 bg-[#F0EDE6] p-3 text-[#171717] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4883d] focus-visible:ring-offset-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Hover Controls - Right */}
          <button
            onClick={() => scroll('right')}
            aria-label="Avis suivants"
            className="absolute right-0 top-1/2 z-10 translate-x-[150%] -translate-y-1/2 bg-[#F0EDE6] p-3 text-[#171717] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b4883d] focus-visible:ring-offset-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile - Simplified Carousel */}
        <div className="md:hidden">
          <div className="relative mx-auto max-w-sm px-5">
            <div className="min-h-[230px] rounded-xl border border-white/[0.08] bg-[#161616] p-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-opacity duration-400 ease-in-out">
              <div className="mb-5 flex justify-center gap-1" aria-label={`${mobileReviews[currentIndex].rating} étoiles`}>
                {Array.from({ length: mobileReviews[currentIndex].rating }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#A8823F] text-[#A8823F]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-pretty font-sans text-sm leading-6 text-[#B0B0B0]">&quot;{mobileReviews[currentIndex].text}&quot;</p>
              <div className="mt-6"><p className="font-sans text-sm font-bold text-[#F0EDE6]">{mobileReviews[currentIndex].author}</p><p className="font-sans text-xs text-[#807b72]">{mobileReviews[currentIndex].years}</p></div>
            </div>
            <button
              onClick={() => setCurrentIndex((previous) => (previous - 1 + mobileReviews.length) % mobileReviews.length)}
              aria-label="Avis précédent"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#A8823F] p-2.5 text-white shadow-lg transition-colors hover:bg-[#8f6d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8823F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentIndex((previous) => (previous + 1) % mobileReviews.length)}
              aria-label="Avis suivant"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#A8823F] p-2.5 text-white shadow-lg transition-colors hover:bg-[#8f6d32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8823F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2" aria-label="Choisir un avis">
            {mobileReviews.map((review, index) => (
              <button key={review.author} onClick={() => setCurrentIndex(index)} aria-label={`Afficher l'avis de ${review.author}`} aria-current={index === currentIndex ? "true" : undefined} className={`h-2 w-2 rounded-full border transition-colors ${index === currentIndex ? "border-[#A8823F] bg-[#A8823F]" : "border-[#737373] bg-transparent"}`} />
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
