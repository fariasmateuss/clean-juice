import styled from 'styled-components';
import { lighten } from 'polished';

interface ArrowsProps {
  arrowPosition: string;
}

export const Wrapper = styled.section`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: -1;
`;

export const TextWithOpacity = styled.p`
  flex: 1;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Amount = styled.p`
  flex: 0;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.gray};

  span {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.inline};
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  flex: 0 0 100%;
  font-size: 200px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const More = styled.div`
  flex: 1;

  a {
    text-decoration: none;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.inline};
    padding: 10px 30px;
    border-radius: 10px;
  }
`;

export const Desc = styled.div`
  flex: 0 0 32%;

  p:nth-child(1) {
    font-size: 30px;
    margin-bottom: 20px;

    span {
      color: ${({ theme }) => theme.colors.span};
    }
  }

  p:nth-child(2) {
    line-height: 2;
  }
`;

export const Arrow = styled.button<ArrowsProps>`
  position: absolute;
  padding: 0;
  top: 50%;
  border: none;
  background: none;
  outline: inherit;
  ${props => props.arrowPosition}: 100px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => lighten(0.4, theme.colors.inline)};
  }
`;

export const Juice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  img {
    animation: float 4s ease-in-out infinite;
    max-height: 450px;
  }

  @keyframes float {
    0% {
      transform: translate(-50%, -46%);
    }
    50% {
      transform: translate(-50%, -54%);
    }
    100% {
      transform: translate(-50%, -46%);
    }
  }
`;

export const Leaves = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .layer:nth-child(1) {
    top: -100px !important;
    left: -480px !important;
  }

  .layer:nth-child(2) {
    top: 10px !important;
    left: 160px !important;
  }

  .layer:nth-child(3) {
    top: -300px !important;
    left: 160px !important;
  }

  .layer:nth-child(4) {
    top: -10px !important;
    left: 320px !important;
  }

  .layer:nth-child(5) {
    top: 200px !important;
    left: -320px !important;
  }
`;
