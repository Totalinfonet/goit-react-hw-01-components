import styled from '@emotion/styled';

export const ItemOfEachFriend = styled.li`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  list-style: none;
  padding: 40px;
  margin: 0;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const Status = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
`;

export const FriendName = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;
