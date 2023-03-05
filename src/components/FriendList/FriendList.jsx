import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListOfFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
