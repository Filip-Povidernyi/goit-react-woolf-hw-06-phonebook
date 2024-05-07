import React from 'react';
import filterStyles from './style.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'store/selectors/selectors';
import { changeFilter } from 'store/sliceFilter/sliceFilter';

const filterInputId = nanoid();

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
      <label className={filterStyles.label}>
        Find contacts by name
        <input
          className={filterStyles.input}
          type="text"
          value={value}
          onChange={onChangeFilter}
          id={filterInputId}
        />
      </label>
    </div>
  );
}

export default Filter;