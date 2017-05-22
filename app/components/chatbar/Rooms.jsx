import React from 'react';
import PropTypes from 'prop-types';
import RoomTab from './RoomTab';
import * as validations from '../../prop_validations/chat';

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
        { sortedRooms.map(room =>
          (
            <RoomTab
              key={ room.id }
              name={ room.name }
              id={ room.id }
              active={ this.props.active === room.id }
              onTabClick={ this.props.onTabClick }
            />
          )
        )}
      </section>
    );
  }
}

Rooms.propTypes = validations.rooms;

export default Rooms;
