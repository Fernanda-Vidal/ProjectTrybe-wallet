import PropTypes from 'prop-types';
import React from 'react';

class InputSelect extends React.Component {
  render() {
    const { nome } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { nome }
          <select>
            <options name={ nome }>{ nome }</options>
          </select>
        </label>
      </div>
    );
  }
}

InputSelect.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default InputSelect;
