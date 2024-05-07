import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from './style.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={filterStyles.label}>
        Find contacts by name
        <input
          className={filterStyles.input}
          type="text"
          placeholder="Search contacts..."
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;