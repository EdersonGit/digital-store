import React, { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const GalleryWrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '500px'};
  border-radius: ${({ radius }) => radius || '0'};
  overflow: hidden;
  position: relative;
  background-color: ${({ customStyle }) => customStyle ? '#f5f5f5' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div`
  display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
  align-items: center;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  position: relative;
  background-color: ${({ $bgColor }) => $bgColor || '#f5f5f5'};
`;

const SlideContent = styled.div`
  flex: 1;
  position: relative;
  text-align: left;
  z-index: 2;
  padding: 50px;
  padding-bottom: 50px;
  max-width: 40%;
`;

const SlideImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'customStyle',
})`
  width: ${({ customStyle }) => customStyle ? '55%' : '550px'}; 
  height: auto;
  border-radius: inherit;
  transform: ${({ customStyle }) => customStyle ? 'rotate(-20deg)' : 'none'};
  position: absolute;
  right: ${({ customStyle }) => customStyle ? '120px' : '80px'}; 
  top:${({ customStyle }) => customStyle ? '-110px' : '-40px'}; 
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const ArrowLeft = styled(Arrow)`
  left: 10px;
`;

const ArrowRight = styled(Arrow)`
  right: 10px;
`;

const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 25px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  display: flex;
  position: relative;
  width: 120px;
  height: 100px;
  border-radius: ${({ radius }) => radius || '0'};
  border: ${({ $isActive }) => ($isActive ? '2px solid #C92071' : 'none')};
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
`;

const Gallery = ({ className, width, height, radius, showThumbs, images, children, customStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <GalleryWrapper className={className} width={width} height={height} radius={radius}>
        <SlideWrapper>
          {images.map((image, index) => (
            <Slide key={index} $isActive={index === currentIndex} $bgColor={image.bgColor}>
              {children && <SlideContent>{children}</SlideContent>}
              <SlideImage src={image.src} alt={`slide-${index}`} customStyle={customStyle} />
            </Slide>
          ))}
        </SlideWrapper>
        <ArrowLeft src={arrowLeft} onClick={handlePrev} style={{ display: currentIndex === 0 ? 'none' : 'block' }} />
        <ArrowRight src={arrowRight} onClick={handleNext} style={{ display: currentIndex === images.length - 1 ? 'none' : 'block' }} />
      </GalleryWrapper>
      {showThumbs && (
        <Thumbnails>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              radius={radius}
              $isActive={currentIndex === index}
              $bgColor={image.bgColor}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </Thumbnails>
      )}
    </>
  );
};

export default Gallery;
