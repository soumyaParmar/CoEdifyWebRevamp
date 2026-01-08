"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/atom/Container/Container";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import Button from "@/components/atom/Button/Button";
import CardLayout from "@/components/atom/Card/CardLayout";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

interface OverviewSlide {
  title: string;
  items: string[];
  image: string;
}

interface ProductOverviewProps {
  badge: string;
  title: string;
  description: string;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction: { label: string; onClick: () => void };
  slides: OverviewSlide[];
  primaryActionLink?: string;
  secondaryActionLink?: string;
}

const ProductOverview = ({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  slides,
  primaryActionLink = "",
  secondaryActionLink = "",
}: ProductOverviewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-24 bg-linear-to-b from-blue-50/50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-gray-100 dark:border-white/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center px-4 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {badge}
            </div>
            <div className="space-y-4">
              <Heading
                level={1}
                variant="gradient"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                {title}
              </Heading>
              <Text
                variant="muted"
                className="text-lg md:text-xl leading-relaxed"
              >
                {description}
              </Text>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                label={primaryAction.label}
                onClick={primaryAction.onClick}
                link={primaryActionLink}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              />
              <Button
                label={secondaryAction.label}
                onClick={secondaryAction.onClick}
                varient="outlined"
                link={secondaryActionLink}
                className="px-8 py-4 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
              />
            </div>
          </div>

          {/* Right Side: Carousel */}
          <div className="relative group">
            <div className="relative h-[550px] w-full flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out transform",
                    index === currentSlide
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : index < currentSlide
                      ? "opacity-0 -translate-x-full scale-95 z-0"
                      : "opacity-0 translate-x-full scale-95 z-0"
                  )}
                >
                  <CardLayout className="h-full flex flex-col p-2! overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 border-gray-100 dark:border-white/5 shadow-2xl rounded-3xl">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                      {/* Optional Overlay Title for Context */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <Heading
                          level={3}
                          className="text-xl md:text-2xl font-bold text-white drop-shadow-lg"
                        >
                          {slide.title}
                        </Heading>
                      </div>
                    </div>
                  </CardLayout>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentSlide
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 dark:bg-slate-700 hover:bg-blue-400"
                  )}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-gray-100 dark:border-white/5"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-gray-100 dark:border-white/5"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductOverview;
