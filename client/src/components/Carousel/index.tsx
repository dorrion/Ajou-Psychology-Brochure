import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>(null);
  const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)
  const slideRange = currentSlide * 1100;

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
    slideRef.current.style.transition = 'all 0.3s ease-in';
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentSlide]);

  return (
    <S.Container>
      <S.CarouselContainer ref={slideRef}>
        <S.CarouselBox className='school'>
          <S.ContentBox>
            <h1>대학원</h1>
            <S.Line />
            <div className='content'>대학원 입시 준비가 궁금하다면? </div>
            <div className='content'>대학원 진로 정보 및 후기의 모든 것</div>
            <div className='tag'>#서류준비 #면접준비 #모집요강 #합격후기</div>
          </S.ContentBox>
        </S.CarouselBox>
        <S.CarouselBox className='company'>
          <S.ContentBox>
            <h1>취업</h1>
            <S.Line />
            <div className='content'>심리학과 취업 준비가 궁금하다면? </div>
            <div className='content'>심리학과 취업 정보 및 후기의 모든 것</div>
            <div className='tag'>#취업현황 #연봉 #취업직군 #합격후기</div>
          </S.ContentBox>
        </S.CarouselBox>
        <S.CarouselBox className='abroad'>
          <S.ContentBox>
            <h1>유학</h1>
            <S.Line />
            <div className='content'>심리학과 유학 준비가 궁금하다면? </div>
            <div className='content'>심리학과 유학 정보 및 후기의 모든 것</div>
            <div className='tag'>#대학정보 #유학준비 #커리큘럼 #유학후기</div>
          </S.ContentBox>
        </S.CarouselBox>
      </S.CarouselContainer>
      <S.BtnContainer>
        <div onClick={prevSlide}>
          <BiLeftArrow />
        </div>
        <div onClick={nextSlide}>
          <BiRightArrow />
        </div>
      </S.BtnContainer>
    </S.Container>
  );
}
