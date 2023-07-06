import cn from 'classnames';
import { CategoriesFilterItem } from '../CategoryFilterItem';

export const CategoriesFiltersList = ({
  categories,
  filterCategories,
  setCategories,
}) => (
  <div className="panel-block is-flex-wrap-wrap">
    <a
      href="#/"
      data-cy="AllCategories"
      className={cn('button', 'is-success', 'mr-6', {
        'is-outlined': filterCategories.length !== 0,
      })}
      onClick={() => setCategories([])}
    >
      All
    </a>

    {categories.map(category => (
      <CategoriesFilterItem
        category={category}
        key={category.id}
        filterCategories={filterCategories}
        setCategories={newCategories => setCategories(newCategories)}
      />
    ))}
  </div>
);
