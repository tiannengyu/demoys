import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/**
 * 卡片包装组件
 * 使用 Framer Motion 实现悬停动画效果
 * 包含渐变背景和内容过渡效果
 */
const CardWrapper = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 500px;

  &:hover {
    .card-content {
      transform: translateY(-10px);
    }
  }
`;

/**
 * 卡片图片组件
 * 使用 object-fit: cover 确保图片填充效果
 */
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/**
 * 卡片内容组件
 * 使用渐变背景创建文字可读性
 * 添加过渡动画提升交互体验
 */
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  transition: transform 0.3s ease;
`;

/**
 * 金额显示组件
 * 使用大号字体突出显示
 */
const Amount = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
  margin: 0;
`;

/**
 * 标签组件
 * 半透明背景提升视觉层次
 */
const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

/**
 * 卡片组件
 * @param {Object} props - 组件属性
 * @param {string} props.image - 卡片图片URL
 * @param {string} props.amount - 显示金额
 * @param {string} props.tag - 标签文本
 */
const Card = ({ image, amount, tag }) => {
  return (
    <CardWrapper whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <CardImage src={image} alt={tag} />
      <CardContent className="card-content">
        <Amount>{amount}</Amount>
        <Tag>{tag}</Tag>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
