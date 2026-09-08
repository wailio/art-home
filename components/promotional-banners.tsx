"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const buttonClass = "inline-flex items-center gap-3 border px-5 py-3 text-[11px] font-semibold tracking-[0.14em] transition-colors"

export default function PromotionalBanners() {
  return (
    <section className="w-full" id="promotional-banners">
      <div className="h-12 bg-[#0A0A0A] md:h-20 md:bg-white" />

      <div className="relative grid grid-cols-1 overflow-hidden md:grid-cols-2 md:h-[500px] lg:h-[600px]">
        <div className="absolute inset-y-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#8d6937] via-[#d2aa67] to-[#8d6937] md:block" />

        <Reveal variant="pop" delay={0}>
          <div className="relative h-96 overflow-hidden md:h-full md:[clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]">
            <img src="/products/2-canapes.jpg" alt="Perfect Armchair" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8%]">
              <div className="relative z-30 w-[min(82%,390px)] rounded-md bg-[#1c1a17] p-8 text-left shadow-[0_22px_45px_rgba(0,0,0,0.28)] md:mr-[-18%] md:rotate-[-5deg] md:p-12">
                <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-[#b08d57]">FAUTEUIL PARFAIT</p>
                <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-tight text-white md:text-[44px]">Nouvelle Collection</h2>
                <p className="mt-5 max-w-[250px] text-sm leading-6 text-[#c7c2ba]">Confort et élégance pour votre intérieur.</p>
                <Link href="/all-products?category=sofas" className={`${buttonClass} mt-7 border-white/70 text-white hover:bg-white hover:text-[#1c1a17]`}>
                  ACHETER MAINTENANT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="pop" delay={150}>
          <div className="relative h-96 overflow-hidden md:h-full md:[clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]">
            <img src="/products/1-salle-a-manger.jpg" alt="Table Sets with Chairs" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[8%]">
              <div className="relative z-30 w-[min(82%,390px)] rounded-md bg-[#f2ede2] p-8 text-left shadow-[0_22px_45px_rgba(0,0,0,0.2)] md:ml-[-18%] md:rotate-[4deg] md:p-12">
                <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-[#a3763f]">ENSEMBLES DE TABLE</p>
                <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-tight text-[#2b2621] md:text-[44px]">Avec Chaises</h2>
                <p className="mt-5 max-w-[250px] text-sm leading-6 text-[#6b645c]">Des moments uniques, autour de votre table.</p>
                <Link href="/all-products?category=chambres" className={`${buttonClass} mt-7 border-[#a67c3d] bg-[#a67c3d] text-white hover:bg-[#8c6532]`}>
                  ACHETER MAINTENANT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-12 bg-[#0A0A0A] md:h-20" />
    </section>
  )
}
