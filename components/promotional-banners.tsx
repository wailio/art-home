"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const buttonClass = "inline-flex items-center gap-3 border px-5 py-3 text-[11px] font-semibold tracking-[0.14em] transition-colors"

export default function PromotionalBanners() {
  return (
    <section className="w-full" id="promotional-banners">
      <div className="h-12 bg-[#0A0A0A] md:h-20 md:bg-white" />

      <div className="relative grid grid-cols-1 overflow-hidden md:h-[500px] md:grid-cols-2 lg:h-[600px]">
        <Reveal variant="pop" delay={0}>
          <div className="relative h-80 overflow-hidden md:h-full">
            <img src="/products/2-canapes.jpg" alt="Perfect Armchair" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Reveal variant="pop" delay={150}>
          <div className="relative h-80 overflow-hidden md:h-full">
            <img src="/products/1-salle-a-manger.jpg" alt="Table Sets with Chairs" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-5 md:flex-row md:gap-0 md:px-0">
          <div className="pointer-events-auto w-full max-w-[360px] rounded-[6px] bg-[#1c1a17] p-7 text-left shadow-[0_22px_45px_rgba(0,0,0,0.3)] md:mr-[-10px] md:rotate-[-5deg] md:p-8">
            <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-[#b08d57]">FAUTEUIL PARFAIT</p>
            <h2 className="font-serif text-[40px] font-bold leading-[0.95] tracking-tight text-white">Nouvelle Collection</h2>
            <p className="mt-5 text-sm leading-6 text-[#c7c2ba]">Confort et élégance pour votre intérieur.</p>
            <Link href="/all-products?category=sofas" className={`${buttonClass} mt-7 border-white text-white hover:bg-white hover:text-[#1c1a17]`}>
              ACHETER MAINTENANT <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="pointer-events-auto w-full max-w-[360px] rounded-[6px] bg-[#f2ede2] p-7 text-left shadow-[0_22px_45px_rgba(0,0,0,0.22)] md:ml-[-10px] md:rotate-[4deg] md:p-8">
            <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-[#a3763f]">ENSEMBLES DE TABLE</p>
            <h2 className="font-serif text-[40px] font-bold leading-[0.95] tracking-tight text-[#2b2621]">Avec Chaises</h2>
            <p className="mt-5 text-sm leading-6 text-[#6b645c]">Des moments uniques, autour de votre table.</p>
            <Link href="/all-products?category=chambres" className={`${buttonClass} mt-7 border-[#a67c3d] bg-[#a67c3d] text-[#2b2621] hover:bg-[#8c6532]`}>
              ACHETER MAINTENANT <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#0A0A0A] md:h-20" />
    </section>
  )
}
