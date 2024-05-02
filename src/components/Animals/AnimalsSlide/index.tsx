"use client";

import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { AnimalCard } from "../AnimalCard";

export const AnimalsSlide: React.FC = () => (
  <Swiper
    effect="coverflow"
    modules={[EffectCoverflow]}
    slidesPerView={3}
    centeredSlides
    slideToClickedSlide
    spaceBetween={0}
    speed={600}
    coverflowEffect={{
      slideShadows: true,
      depth: 0,
      rotate: 45,
      scale: 0.7,
      stretch: 0,
      modifier: 1,
    }}
  >
    <SwiperSlide>
      {({ isActive }) => <AnimalCard isSelected={isActive} />}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => <AnimalCard isSelected={isActive} />}
    </SwiperSlide>
  </Swiper>
);
