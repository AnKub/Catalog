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
  <div className="sort-bar">
    <select
      className="sort-bar__select"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default SortBar;
