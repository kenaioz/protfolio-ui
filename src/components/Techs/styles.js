import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Knonwledges = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const ContainerTechSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 32px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.RED};
    span {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  h3 {
    text-align: center;
    margin-bottom: 12px;
  }
`;

export const ContainerIconWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 150px;
  flex-wrap: wrap;
  padding: 0 15px;
`;

export const ContainerIcons = styled.div`
  > div {
    position: relative;
    display: inline-block;

    &:hover span {
      visibility: visible;
      opacity: 1;
    }

    span {
      visibility: hidden;
      width: 120px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -60px;
      opacity: 0;
      transition: opacity 0.3s;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 15px;

    width: fit-content;
    height: fit-content;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ $bgColor }) => $bgColor};
  }
`;