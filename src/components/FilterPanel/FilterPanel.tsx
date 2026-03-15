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
  <SortBar value={sort} onChange={onSort} />
    <SearchBar value={search} onChange={onSearch} />   
  </div>
);

export default FilterPanel;
