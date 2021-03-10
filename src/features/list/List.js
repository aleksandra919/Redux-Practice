import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectList, 
  addItem } from './listSlice'

export function List() {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const [item, setItem] = useState(1);

  const listItem = list.map((item,index)=> <li key={index}>{item}</li>)

  return (
      <div>
        <input
          aria-label="Add new item"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <button
        onClick={() => dispatch(addItem(item))}
        >
          Add item
        </button>
        <div>
        <p>Your list:</p>
          <ul>
            {listItem}
          </ul>
        </div>
    </div>
  );
}
