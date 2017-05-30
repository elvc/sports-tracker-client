import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ShareForm from '../share/ShareForm';

export default class CardFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareModalIsOpen: false
    }
  }

  // reset state
  resetState = () => {
    this.setState({
      shareModalIsOpen: false
    });
  }

  shareOpenModal = () => {
    this.setState({
      shareModalIsOpen: true
    });
  }

  shareCloseModal = () => {
    this.resetState();
  }

  render() {
    const joinChat = (name, id) => {
      const room = {
        name,
        id,
        messages: [],
        onlineUsers: 0,
        input: '',
        unread: false
      };
      this.props.joinRoom(room);
    };

    const modalStyles = {
      content: {
        width: '50vw',
        padding: '30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: '5000',
        marginRight: '-50%',
        transition: 'all 400ms ease-in-out',
        transform: 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="game-card-footer">
        { this.props.gameStarted && <a
          className="game-card-pbp-btn d-flex flex-column"
          onClick={ () => this.props.togglePlayByPlay(this.props.gameId) }
          role="button"
          tabIndex={ 0 }
        >Play-by-Play</a>
        }

        <div className="game-card-social">
          {/* share game with someone */}
          <a
            onClick={ this.shareOpenModal }
            role="button"
            tabIndex={ 0 }
            className="game-card-tooltip"
          >
            <i className="p-2 fa fa-share-alt" aria-hidden="true" />
            <span role="button" className="game-card-tooltip-text">Share</span>
          </a>

          <Modal
            isOpen={ this.state.shareModalIsOpen }
            onRequestClose={ this.shareCloseModal }
            style={ modalStyles }
            shouldCloseOnOverlayClick={ false }
            contentLabel="Share Modal"
          >
            <h3 className="pl-0 d-flex modal-header">Share with someone: <i className="fa fa-times justify-content-right" onClick={ this.shareCloseModal } /></h3>
            <ShareForm
              close={ this.shareCloseModal }
              notify={ this.props.notify }
            />
          </Modal>

          { this.props.gameStarted || <a
            onClick={ () => {
              joinChat(this.props.name, this.props.gameId);
              setTimeout(() => {
                document.getElementById('chat-input').focus();
              }, 0);
            } }
            role="button"
            tabIndex={ 0 }
            className="game-card-tooltip"
          >
            <i className="p-2 fa fa-rss" aria-hidden="true" />
            <span className="game-card-tooltip-text">Notify me</span>
          </a> }
          <a
            onClick={ () => {
              joinChat(this.props.name, this.props.gameId);
              setTimeout(() => {
                document.getElementById('chat-input').focus();
              }, 0);
            } }
            role="button"
            tabIndex={ 0 }
            className="game-card-tooltip"
            id="chat-btn"
          >
            <i className="p-2 fa fa-commenting" aria-hidden="true" />
            <span className="game-card-tooltip-text">Join chat</span>
          </a>
        </div>
      </div>
    );
  }
}

CardFooter.propTypes = {
  name: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired
};
