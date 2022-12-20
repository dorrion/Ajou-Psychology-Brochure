import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);
  const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)
  const slideRange = currentSlide * 1280;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in';
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentSlide]);

  return (
    <S.Container>
      <S.CarouselContainer ref={slideRef}>
        <S.CarouselBox className='school' />
        <S.CarouselBox className='company' />
        <S.CarouselBox className='abroad' />
      </S.CarouselContainer>
      <div>
        <div onClick={prevSlide}>
          <BiLeftArrow />
        </div>
        <div onClick={nextSlide}>
          <BiRightArrow />
        </div>
      </div>
    </S.Container>
  );
}
