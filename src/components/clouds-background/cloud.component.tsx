import React from "react";
import styled from "styled-components";

type CloudProps = {
  width: number;
  height: number;
};

const CloudComponent: React.FC<CloudProps> = props => <Cloud {...props} />;

const Cloud = styled.div<CloudProps>`
  width: 200px;
  height: 60px;
  background: #fff;
  border-radius: 200px;
  position: absolute;
  z-index: 1;
  top: ${({ height }) => `${Math.round(Math.random() * height) - 50}px`};
  left: ${({ width }) =>
    `${width - Math.round(Math.random() * width) - 450}px`};
  opacity: ${() => Math.random() + 0.3};

  ::before,
  ::after {
    content: "";
    position: absolute;
    overflow: hidden;
    background: #fff;
    width: 100px;
    height: 80px;
    top: -15px;
    left: 10px;
    border-radius: 100px;
    transform: rotate(30deg);
  }

  ::after {
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }

  animation: moveclouds 60s linear infinite;

  @keyframes moveclouds {
    0% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(-1000px);
    }
  }

  @media screen and (max-width: 479px) {
    left: ${({ width }) =>
      `${width - Math.round(Math.random() * width) - 250}px`};
    animation: moveclouds 20s linear infinite;

    @keyframes moveclouds {
      0% {
        transform: translateX(250px);
      }
      100% {
        transform: translateX(-250px);
      }
    }
  }
`;

export default CloudComponent;
