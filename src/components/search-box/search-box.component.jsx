import React from 'react'

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <div class="ms-SearchBox">
      <input class="ms-SearchBox-field" type="search" onChange={handleChange} />
      <label class="ms-SearchBox-label">
        <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
        <span class="ms-SearchBox-text">{placeholder}</span>
      </label>
    </div>
  </div>
);
