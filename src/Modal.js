import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  actionType: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

const defaultProps = {
  value: '',
};


class Modal extends React.Component {
  handleRemove = () => {
    this.props.onRemove();
  }

  handleSave = () => {
    const { value } = this.input;
    this.props.onSave({
      value,
    });
  }

  renderText() {
    const {
      start,
      end,
    } = this.props;

    return (<span>{`${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
  }

  render() {
    const {
      value,
    } = this.props;
    return (
      <div className="customModal">
        <div className="customModal__text">{this.renderText()}</div>
        <input
          ref={(el) => { this.input = el; }}
          className="customModal__input"
          type="text"
          placeholder="Note"
          defaultValue={value}
        />
	<button className="customModal__button" style={{ backgroundColor: 'red' }} onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" style={{ backgroundColor: '#33cc33' }} onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
