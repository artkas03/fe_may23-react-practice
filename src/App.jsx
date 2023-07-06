import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { Productlist } from './components/Productslist';
import { UserFiltersList } from './components/UserFiltersList';
import { CategoriesFiltersList } from './components/CategoriesFiltersList';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer
    .find(categoryItem => product.categoryId === categoryItem.id);
  const user = usersFromServer
    .find(userItem => category.ownerId === userItem.id);

  return {
    id: product.id,
    name: product.name,
    category,
    user,
  };
});

function filterProducts(
  // eslint-disable-next-line no-shadow
  products,
  {
    userFilter,
    query,
    filterCategories,
    sortColumn,
  },
) {
  let productCopy = [...products];

  if (userFilter !== 'all') {
    productCopy = productCopy
      .filter(product => product.user.name === userFilter);
  }

  if (query) {
    const normalizeQuery = query.toLowerCase();

    productCopy = productCopy
      .filter((product) => {
        const normalizedName = product.name.toLowerCase();

        return normalizedName.includes(normalizeQuery);
      });
  }

  if (filterCategories.length > 0) {
    productCopy = productCopy
      .filter(product => filterCategories
        .some(categoryElement => product.category.title === categoryElement));
  }

  if (sortColumn.length > 0) {
    productCopy = filterByColumn(productCopy, sortColumn);
  }

  return productCopy;
}

// eslint-disable-next-line no-shadow
function filterByColumn(products, sortColumn) {
  let productCopy = [...products];

  switch (sortColumn[0]) {
    case 'ID':
      productCopy = productCopy
        .sort((product1, product2) => {
          if (sortColumn[1] === 1) {
            return product2.id - product1.id;
          }

          return product1.id - product2.id;
        });
      break;

    case 'Product':
      productCopy = productCopy
        .sort((product1, product2) => {
          if (sortColumn[1] === 1) {
            return product2.name.localeCompare(product1.name);
          }

          return product1.name.localeCompare(product2.name);
        });
      break;

    case 'Category':
      productCopy = productCopy
        .sort((product1, product2) => {
          if (sortColumn[1] === 1) {
            return product2.category.title
              .localeCompare(product1.category.title);
          }

          return product1.category.title
            .localeCompare(product2.category.title);
        });
      break;

    case 'User':
      productCopy = productCopy
        .sort((product1, product2) => {
          if (sortColumn[1] === 1) {
            return product2.user.name
              .localeCompare(product1.user.name);
          }

          return product1.user.name
            .localeCompare(product2.user.name);
        });
      break;
    default:
      return 0;
  }

  return productCopy;
}

export const App = () => {
  const [userFilter, setUserFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [filterCategories, setFilterCategories] = useState([]);
  const [sortColumn, setSortColumn] = useState([]);

  const visibleProducts = filterProducts(
    products,
    {
      userFilter,
      query,
      filterCategories,
      sortColumn,
    },
  );

  const clearQueryButton = (
    <span className="icon is-right">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete"
        onClick={() => setQuery('')}
      />
    </span>
  );

  const noMatchingProductsBlock = (
    <p data-cy="NoMatchingMessage">
      No products matching selected criteria
    </p>
  );

  function handeFullReset() {
    setUserFilter('all');
    setQuery('');
    setFilterCategories([]);
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <UserFiltersList
              users={usersFromServer}
              userFilter={userFilter}
              changeUserFilter={newUser => setUserFilter(newUser)}
            />

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={query}
                  onChange={event => setQuery(event.currentTarget.value)}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {query && clearQueryButton}
              </p>
            </div>

            <CategoriesFiltersList
              categories={categoriesFromServer}
              filterCategories={filterCategories}
              setCategories={categories => setFilterCategories(categories)}
            />

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={handeFullReset}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {visibleProducts.length === 0
            ? noMatchingProductsBlock
            : (
              <Productlist
                products={visibleProducts}
                columnSort={newFilter => setSortColumn(newFilter)}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};
