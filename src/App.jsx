import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { Productlist } from './components/Productlist';
import { UserFilterList } from './components/UserFilterList/UserFilterList';

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

// eslint-disable-next-line no-shadow
function filterProducts(products, { userFilter, query }) {
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

  return productCopy;
}

export const App = () => {
  const [userFilter, setUserFilter] = useState('all');
  const [query, setQuery] = useState('');

  const visibleProducts = filterProducts(products, { userFilter, query });

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
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <UserFilterList
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

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
              >
                All
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 1
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1"
                href="#/"
              >
                Category 2
              </a>

              <a
                data-cy="Category"
                className="button mr-2 my-1 is-info"
                href="#/"
              >
                Category 3
              </a>
              <a
                data-cy="Category"
                className="button mr-2 my-1"
                href="#/"
              >
                Category 4
              </a>
            </div>

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
            : <Productlist products={visibleProducts} />
          }
        </div>
      </div>
    </div>
  );
};
