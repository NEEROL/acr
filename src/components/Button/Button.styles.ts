import styled, { css, keyframes } from 'styled-components';

type BtnProps = {
  isPulsing?: boolean;
  bgColor: string;
};

export const Btn = styled.a`
  appearance: none;
  text-decoration: none;
  width: 100%;
  height: 55px;
  background: rgb(${({ bgColor }: Pick<BtnProps, 'bgColor'>) => bgColor});
  border: 1px solid rgb(${({ bgColor }: Pick<BtnProps, 'bgColor'>) => bgColor});
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 150ms, box-shadow 150ms;
  font-size: 17px;
  font-weight: bold;
  padding: 18px 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  &.large {
    width: 284px;
    height: 55px;

    &::before {
      display: none;
    }
  }

  &.pulsingLightBlue {
    animation: pulse 1.5s infinite linear;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 rgba(104, 188, 235, 0);
      }
      50% {
        box-shadow: 0 0 0 10px rgba(104, 188, 235, 0.7);
      }
      100% {
        box-shadow: 0 0 0 20px rgba(104, 188, 235, 0);
      }
    }
  }

  &.fixFade {
    &[data-aos='animated'] {
      opacity: 0;
      transition-property: opacity;

      &.aos-animate {
        opacity: 1;
      }
    }
  }
`;

type IconProps = {
  iconUrl: string;
  position: 'left' | 'right';
};

export const Icon = styled.span<IconProps>`
  content: url('${({ iconUrl }) => iconUrl}');
  margin-${({ position }) => (position === 'right' ? 'left' : 'right')}: 19px;
`;

export const Sup = styled.span`
  position: absolute;
  top: 10px;
  right: 28px;
  font-weight: 700;
  font-size: 10px;
  color: #3b8ebc;
`;
