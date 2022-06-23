import PropTypes from 'prop-types';
import React from 'react';

class InputSelect extends React.Component {
  render() {
    const { nome, label } = this.props;
    return (
      <div>
        <label htmlFor={ label }>
          { label }
          <select>
            <options name={ nome }>{ nome }</options>
          </select>
        </label>
      </div>
    );
  }
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default InputSelect;
