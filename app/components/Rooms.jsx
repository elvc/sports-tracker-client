import React from 'react';
import PropTypes from 'prop-types';
import RoomTab from './RoomTab';

class Rooms extends React.Component {

  render() {
    const rooms = [{
      game: 1905, // unique id for room
      name: 'GSW @ SAS',
      active: true,
      messages: [
        {
          user: 'somebody',
          content: 'steph is the best',
          id: 99
        }
      ]
    }];
    return (
      <section>
        { rooms.map(room =>
          <RoomTab
            key={ room.game }
            room={ room }
          />
        )}
      </section>
    );
  }
}

export default Rooms;
