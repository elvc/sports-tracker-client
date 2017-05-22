import React from 'react';
import PropTypes from 'prop-types';
import RoomTab from './RoomTab';
import * as validations from '../prop_validations/chat';

class Rooms extends React.Component {

  render() {
    return (
      <section>
        { this.props.rooms.map((room, index) =>
          (
            <RoomTab
              key={ room.id }
              room={ room }
              active={ this.props.active === index }
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
