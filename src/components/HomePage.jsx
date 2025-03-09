import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";

// 导入卡片图片资源
import card1Image from "../assets/images/card1.jpg";
import card2Image from "../assets/images/card2.jpg";
import card3Image from "../assets/images/card3.jpg";

/**
 * 主容器组件
 * 设置最小高度确保页面填充
 */
const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

/**
 * 英雄区域组件
 * 响应式布局，在移动端调整内边距
 */
const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

/**
 * 标题组件
 * 使用 clamp 实现响应式字体大小
 * 添加入场动画效果
 */
const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

/**
 * 描述文本组件
 * 响应式字体大小和最大宽度限制
 */
const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #666;
  max-width: 48rem;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

/**
 * 按钮组件
 * 添加悬停和点击动画效果
 */
const Button = styled(motion.button)`
  background-color: black;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

/**
 * 卡片区域组件
 * 实现响应式轮播布局
 * 包含自定义分页器样式
 */
const CardsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  overflow: hidden;

  /* Swiper 容器样式 */
  .swiper {
    margin: 0 auto;
    padding: 1rem;
    overflow: visible;
    max-width: 100%;
  }

  /* 轮播包装器样式 */
  .swiper-wrapper {
    align-items: stretch;
  }

  /* 轮播项样式 */
  .swiper-slide {
    height: auto;
    opacity: 0.4;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;

    /* 移动端样式 */
    @media (max-width: 639px) {
      width: 100% !important;
      max-width: 400px;
      margin: 0 auto;
    }

    /* 平板端样式 */
    @media (min-width: 640px) and (max-width: 1023px) {
      width: calc(50% - 10px) !important;
    }

    /* 桌面端样式 */
    @media (min-width: 1024px) {
      width: calc(33.333% - 20px) !important;
      opacity: 1;
    }

    &.swiper-slide-active {
      opacity: 1;
    }
  }

  /* 分页器样式 */
  .swiper-pagination {
    position: relative;
    bottom: 0;
    margin-top: 2rem;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #000;
    opacity: 0.2;

    &-active {
      opacity: 1;
    }
  }
`;

/**
 * 卡片数据配置
 */
const cardData = [
  {
    image: card1Image,
    amount: "S$6,252",
    tag: "Main",
  },
  {
    image: card2Image,
    amount: "$2,500",
    tag: "United States · USD",
  },
  {
    image: card3Image,
    amount: "S$500",
    tag: "Kiddo account",
  },
];

/**
 * 主页组件
 * 包含英雄区域和卡片轮播
 * 实现响应式布局和动画效果
 */
const HomePage = () => {
  return (
    <Container>
      {/* 英雄区域 */}
      <Hero>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MAKE YOUR SPEND, WELL-SPENT
        </Title>
        <Description>
          Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
          life goals? Reach them faster. However you spend — Revolut is all you
          need.
        </Description>
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get started
        </Button>
      </Hero>

      {/* 卡片轮播区域 */}
      <CardsSection>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 30,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsSection>
    </Container>
  );
};

export default HomePage;
