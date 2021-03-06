import React from 'react';
import RoomTab from './RoomTab';
import roomsProps from '../../prop_validations/chat';

class Rooms extends React.Component {
  render() {
    const sortedRooms = this.props.rooms;
    sortedRooms.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      }
      return 0;
    });

    return (
      <section>
        <ul className="nav nav-tabs room-bar">
          { sortedRooms.map(room =>
          (
            <RoomTab
              key={ room.id }
              name={ room.name }
              id={ room.id }
              unread={ room.unread }
              active={ this.props.active === room.id }
              onTabClick={ this.props.onTabClick }
              closeChat={ this.props.closeChat }
            />
          )
        )}
        </ul>
      </section>
    );
  }
}

Rooms.propTypes = roomsProps;

export default Rooms;
