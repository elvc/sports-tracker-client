import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    // cards 
    return (
      // need to pass props to loop more cards
      <div className="card-deck">
        <div className="card">
          <div className="card-block">
              <div className="d-flex justify-content-around">
                <div className="card-title">April 1, 2017</div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="card-text d-flex flex-column">
                  <div className="text-center">TEAM 1</div>
                  <div>78</div>
                </div>
                <div className="card-text d-flex flex-column">
                  <div>TEAM 2</div>
                  <div>90</div>
                </div>
              </div>
            </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-info mr-auto p-2">Play-by-Play</button>
            <i className="p-2 fa fa-share-alt" aria-hidden="true"></i>
            <i className="p-2 fa fa-rss" aria-hidden="true"></i>
            <i className="p-2 fa fa-commenting" aria-hidden="true"></i>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
              <div className="d-flex justify-content-around">
                <div className="card-title">April 1, 2017</div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="card-text d-flex flex-column">
                  <div className="text-center">TEAM 1</div>
                  <div>78</div>
                </div>
                <div className="card-text d-flex flex-column">
                  <div>TEAM 2</div>
                  <div>90</div>
                </div>
              </div>
            </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-info mr-auto p-2">Play-by-Play</button>
            <i className="p-2 fa fa-share-alt" aria-hidden="true"></i>
            <i className="p-2 fa fa-rss" aria-hidden="true"></i>
            <i className="p-2 fa fa-commenting" aria-hidden="true"></i>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
              <div className="d-flex justify-content-around">
                <div className="card-title">April 1, 2017</div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="card-text d-flex flex-column">
                  <div className="text-center">TEAM 1</div>
                  <div>78</div>
                </div>
                <div className="card-text d-flex flex-column">
                  <div>TEAM 2</div>
                  <div>90</div>
                </div>
              </div>
            </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-info mr-auto p-2">Play-by-Play</button>
            <i className="p-2 fa fa-share-alt" aria-hidden="true"></i>
            <i className="p-2 fa fa-rss" aria-hidden="true"></i>
            <i className="p-2 fa fa-commenting" aria-hidden="true"></i>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
              <div className="d-flex justify-content-around">
                <div className="card-title">April 1, 2017</div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="card-text d-flex flex-column">
                  <div className="text-center">TEAM 1</div>
                  <div>78</div>
                </div>
                <div className="card-text d-flex flex-column">
                  <div>TEAM 2</div>
                  <div>90</div>
                </div>
              </div>
            </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-info mr-auto p-2">Play-by-Play</button>
            <i className="p-2 fa fa-share-alt" aria-hidden="true"></i>
            <i className="p-2 fa fa-rss" aria-hidden="true"></i>
            <i className="p-2 fa fa-commenting" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}