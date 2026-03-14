import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SortBar from './SortBar/SortBar';
import './FilterPanel.scss';

interface FilterPanelProps {
  search: string;
  onSearch: (value: string) => void;
  sort: string;
  onSort: (value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ search, onSearch, sort, onSort }) => (
  <div className="filter-panel">
    <SearchBar value={search} onChange={onSearch} />
    <SortBar value={sort} onChange={onSort} />
  </div>
);

export default FilterPanel;
