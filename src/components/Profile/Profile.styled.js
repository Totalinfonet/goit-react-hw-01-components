import styled from '@emotion/styled';

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 260px;
  height: 340px;
  background-color: #f0f0f0;
  padding: 40px 60px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const UserName = styled.p`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const UserTag = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const UserStatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  background-color: #f5f5f5;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin-right: 20px;
`;

export const UserStatsLabel = styled.span`
  color: #333;
  font-style: 1rem;
`;

export const UserStatsValue = styled.span`
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
`;
