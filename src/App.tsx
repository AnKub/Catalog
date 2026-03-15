import { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination/Pagination';
import FilterPanel from './components/FilterPanel/FilterPanel';
import type { Product } from './services/productApi';
import { fetchProducts} from './services/productApi';
import { useDebounce } from './hooks/useDebounce';


function App() {
    const [page, setPage] = useState(1);
    const pageSize = 12; 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popularity');
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err instanceof Error ? err.message : 'Failed to load products');
        setLoading(false);
      });
  }, []);

 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'popularity') return b.rating - a.rating;
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / pageSize);
  const paginatedProducts = sortedProducts.slice((page - 1) * pageSize, page * pageSize);

// тут скидання сторінки , типу якщо корситувач змінив фільтр
  useEffect(() => {
    setPage(1);
  }, [search, sort]);

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <FilterPanel
            search={search}
            onSearch={setSearch}
            sort={sort}
            onSort={setSort}
          />
          <ProductGrid products={paginatedProducts} />
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </Layout>
  );
}

export default App;