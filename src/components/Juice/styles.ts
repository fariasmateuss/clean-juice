import styled from 'styled-components';

export const Container = styled.div`
  .juice {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;

    img {
      animation: float 4s ease-in-out infinite;
      max-height: 450px;
    }
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

  .leaves {
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
  }
`;
