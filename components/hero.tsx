"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    desktop: "/images/hero-marrakech-01.webp",
    mobile: "/images/hero-marrakech-01-mobile.webp",
    description:
      "Un crossover bleu sur une avenue bordée de palmiers à Marrakech",
  },
  {
    desktop: "/images/hero-marrakech-02.webp",
    mobile: "/images/hero-marrakech-02-mobile.webp",
    description: "Un SUV blanc près des remparts ocre de Marrakech",
  },
  {
    desktop: "/images/hero-marrakech-03.webp",
    mobile: "/images/hero-marrakech-03-mobile.webp",
    description: "Une berline rouge dans une rue de Marrakech",
  },
];

const commitments = [
  {
    title: "Des véhicules entretenus",
    description: "Chaque voiture est vérifiée avant votre départ.",
  },
  {
    title: "Une équipe à votre écoute",
    description: "Un vrai interlocuteur, avant et pendant le trajet.",
  },
  {
    title: "Au départ de Marrakech",
    description: "Retrouvez notre équipe locale pour vos trajets au Maroc.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);
    const updatePageVisibility = () =>
      setIsPageVisible(document.visibilityState === "visible");

    updateMotionPreference();
    updatePageVisibility();
    motionPreference.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updatePageVisibility);

    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || !isPageVisible) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPageVisible, isPlaying, prefersReducedMotion]);

  const showSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX === null || endX === undefined || Math.abs(endX - startX) < 48)
      return;
    showSlide(activeSlide + (endX < startX ? 1 : -1));
  };

  const renderSlides = (isMobile: boolean) => (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex transition-transform duration-700 ease-out motion-reduce:transition-none"
      style={{ transform: `translateX(-${activeSlide * 100}%)` }}
    >
      {heroSlides.map((slide, index) => (
        <div key={slide.desktop} className="relative h-full w-full shrink-0">
          <Image
            src={isMobile ? slide.mobile : slide.desktop}
            alt={slide.description}
            fill
            priority={index === 0}
            sizes="100vw"
            className={
              isMobile
                ? "object-cover object-[50%_42%]"
                : "object-cover object-[62%_57%]"
            }
          />
        </div>
      ))}
    </div>
  );

  const renderControls = (compact = false) => (
    <div
      className={`absolute z-20 flex items-center gap-2 rounded-sm bg-white/90 p-2 backdrop-blur-sm ${compact ? "bottom-4 right-4" : "bottom-6 right-8 lg:right-14"}`}
    >
      <button
        type="button"
        aria-label="Photo précédente"
        onClick={() => showSlide(activeSlide - 1)}
        className="flex size-9 items-center justify-center rounded-sm text-brand-strong transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
      </button>
      {heroSlides.map((slide, index) => (
        <button
          key={slide.desktop}
          type="button"
          aria-label={`Afficher la photo ${index + 1} sur ${heroSlides.length}`}
          aria-current={activeSlide === index ? "true" : undefined}
          onClick={() => showSlide(index)}
          className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${activeSlide === index ? "w-6 bg-brand" : "w-2 bg-slate-400 hover:bg-slate-600"}`}
        />
      ))}
      {!prefersReducedMotion && (
        <button
          type="button"
          aria-label={
            isPlaying ? "Mettre le diaporama en pause" : "Lire le diaporama"
          }
          onClick={() => setIsPlaying((playing) => !playing)}
          className="flex size-9 items-center justify-center rounded-sm text-brand-strong transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {isPlaying ? (
            <Pause aria-hidden="true" className="size-4" />
          ) : (
            <Play aria-hidden="true" className="size-4" />
          )}
        </button>
      )}
      <button
        type="button"
        aria-label="Photo suivante"
        onClick={() => showSlide(activeSlide + 1)}
        className="flex size-9 items-center justify-center rounded-sm text-brand-strong transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <ArrowRight aria-hidden="true" className="size-4" />
      </button>
    </div>
  );

  return (
    <section
      id="accueil"
      aria-label="Location de voiture à Marrakech"
      className="pb-6 sm:pb-0"
    >
      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label="Photos de voitures à Marrakech"
        className="relative isolate h-[72svh] min-h-[420px] w-full overflow-hidden bg-slate-100 md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {renderSlides(true)}
        <div aria-live={isPlaying ? "off" : "polite"} className="sr-only">
          Photo {activeSlide + 1} sur {heroSlides.length} :{" "}
          {heroSlides[activeSlide].description}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-white/45 to-white"
        />
        {renderControls(true)}
      </div>

      <div className="bg-white px-5 pb-10 pt-10 text-brand-strong md:hidden">
        <div className="hero-copy-enter mx-auto max-w-[42rem]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Location de voiture à Marrakech
          </p>
          <h1 className="text-[2.35rem] font-bold leading-[1.02] tracking-[-0.055em] min-[380px]:text-[2.65rem]">
            Partez sur la route l’esprit léger.
          </h1>
          <p className="mt-4 max-w-[26rem] text-sm font-semibold leading-relaxed text-slate-700">
            Le bon véhicule, au bon endroit et au bon moment, avec une équipe
            locale à vos côtés pour chaque trajet.
          </p>
          <Button
            render={<a href="#services" />}
            nativeButton={false}
            className="mt-6 h-12 rounded-sm px-6 text-sm font-semibold shadow-none"
          >
            Découvrir nos voitures
            <ArrowRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>

      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label="Photos de voitures à Marrakech"
        className="relative isolate hidden h-[600px] overflow-hidden bg-slate-100 md:block md:h-[640px] lg:h-[640px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {renderSlides(false)}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[105%] h-200  bg-gradient-to-r from-white via-white/0 to-transparent" />
        <div className="relative z-20 mx-auto flex h-full max-w-[100rem] items-start px-8 pt-16 text-brand-strong lg:px-14 lg:pt-24">
          <div className="hero-copy-enter max-w-[42rem]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand md:text-xs">
              Location de voiture à Marrakech
            </p>
            <h1 className="max-w-[42rem] text-[3.25rem] font-bold leading-[1.02] tracking-[-0.055em] lg:text-[4.25rem]">
              Partez sur la route
              <br />
              <span className="text-[#084ea3]">l’esprit léger.</span>
            </h1>
            <p className="mt-6 max-w-[26rem] text-base font-semibold leading-relaxed text-slate-800">
              Le bon véhicule, au bon endroit et au bon moment, avec une équipe
              locale à vos côtés pour chaque trajet.
            </p>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              className="mt-8 h-14 rounded-sm px-7 text-base font-semibold shadow-none"
            >
              Découvrir nos voitures
              <ArrowRight aria-hidden="true" className="size-5" />
            </Button>
          </div>
        </div>
        <div aria-live={isPlaying ? "off" : "polite"} className="sr-only">
          Photo {activeSlide + 1} sur {heroSlides.length} :{" "}
          {heroSlides[activeSlide].description}
        </div>
        {renderControls()}
      </div>

      <div className="border-y border-slate-200 bg-[#f8fafc]">
        <ul
          aria-label="Les engagements Carrental.ma"
          className="mx-auto grid max-w-[76rem] grid-cols-1 px-5 py-3 sm:grid-cols-3 sm:px-8 sm:py-6 lg:px-10"
        >
          {commitments.map(({ title, description }, index) => (
            <li
              key={title}
              className="flex flex-col border-b border-slate-200 py-3 last:border-b-0 sm:min-h-[10rem] sm:border-b-0 sm:border-r sm:border-slate-300 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 lg:px-8"
            >
              <span
                aria-hidden="true"
                className="mb-3 h-[3px] w-11 bg-[#2855ff]"
              />
              <span className="min-w-0">
                <span className="block text-4xl font-bold leading-none tracking-[-0.05em] text-[#172653] sm:text-5xl">
                  0{index + 1}
                </span>
                <span className="mt-3 block text-base font-semibold leading-6 text-slate-800">
                  {title}
                </span>
                <span className="mt-1.5 block max-w-[22rem] text-sm font-medium leading-5 text-slate-700">
                  {description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
