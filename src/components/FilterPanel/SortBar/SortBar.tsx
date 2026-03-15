import React from 'react';
import './SortBar.scss';

interface SortBarProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: 'popularity', label: 'By popularity' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'By name' },
];

const SortBar: React.FC<SortBarProps> = ({ value, onChange }) => (
  <div className="sort-bar" role="listbox" aria-label="Sort products">
    <select
      className="sort-bar__select"
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Sort products"
      tabIndex={0}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default SortBar;
