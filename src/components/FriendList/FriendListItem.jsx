import PropTypes from 'prop-types';
import {
  ItemOfEachFriend,
  Status,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemOfEachFriend>
      <Status>{isOnline}</Status>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ItemOfEachFriend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
