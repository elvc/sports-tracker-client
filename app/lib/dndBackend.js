

Object.defineProperty(exports, '__esModule', {
  value: true
});

const _reactDndHtml5Backend = require('react-dnd-html5-backend');

const _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

const _reactDndTouchBackend = require('react-dnd-touch-backend');

const _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);

const _Transitions = require('./Transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  backends: [{
    backend: _reactDndHtml5Backend2.default,
    preview: true
  }, {
    backend: (0, _reactDndTouchBackend2.default)({ enableMouseEvents: true, delay: 750 }),
    preview: true,
    transition: _Transitions.TouchTransition
  }]
};
