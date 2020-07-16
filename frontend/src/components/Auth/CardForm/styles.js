import styled from 'styled-components';


export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  margin: 0 auto;
  max-width: 350px;

  @media (max-width: 768px) {
      max-width: 100%;
  }
`;

export const Content = styled.div`
  padding: 40px;
`;

export const ImgContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;
