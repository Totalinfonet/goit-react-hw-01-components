import styled from '@emotion/styled';

const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

export const StatisticsSection = styled.section`
  width: 340px;
  margin-top: 50px;
  background-color: #f0f0f0;
  padding: 40px 60px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const StatisticsTitle = styled.h2`
  display: flex;
  justify-content: center;
  background-color: #fff;
  text-transform: uppercase;
  padding: 40px;
  margin: 0;
  font-size: 1.3rem;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 0;
  padding: 0;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
  background-color: ${getRandomColor};
  color: white;
`;

export const StatisticsLabel = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const StatisticsPercentage = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
