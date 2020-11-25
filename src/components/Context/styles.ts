import styled from 'styled-components';

export const Container = styled.main`
  .content {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: -1;
  }

  .title {
    flex: 0 0 100%;
    font-size: 200px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .tagline {
    flex: 1;
    font-size: 30px;
    color: #999;
  }

  .pages {
    flex: 0;
    letter-spacing: 5px;
    color: #999;
    span {
      font-size: 60px;
      color: #000;
      font-weight: 600;
    }
  }
  .more {
    flex: 1;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      background: #000;
      padding: 10px 30px;
      border-radius: 10px;
    }
  }

  .desc {
    flex: 0 0 32%;

    p {
      &:nth-child(1) {
        font-size: 30px;
        margin-bottom: 20px;
      }

      &:nth-child(2) {
        line-height: 2;
      }
    }

    span {
      color: #aecd31;
    }
  }

  .arrows {
    .prev {
      position: absolute;
      top: 50%;
      left: 100px;
    }

    .next {
      position: absolute;
      top: 50%;
      right: 100px;
    }

    button {
      border: 1px solid #999;
      background: transparent;
      padding: 20px;
      outline: none;

      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }

  .prev,
  .next {
    cursor: pointer;
  }
`;
