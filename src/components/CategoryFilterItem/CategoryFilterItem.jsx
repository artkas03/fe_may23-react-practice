import cn from 'classnames';

export const CategoriesFilterItem = ({
  category,
  filterCategories,
  setCategories,
}) => {
  const {
    title,
  } = category;

  function handleAddingCategory() {
    const newCategories = [...filterCategories];

    if (newCategories.includes(title)) {
      const index = newCategories.indexOf(title);

      newCategories.splice(index, 1);
    } else {
      newCategories.push(title);
    }

    setCategories(newCategories);
  }

  return (
    <a
      data-cy="Category"
      className={cn('button', 'mr-2', 'my-1', {
        'is-info': filterCategories.includes(title),
      })}
      href="#/"
      onClick={() => handleAddingCategory()}
    >
      {title}
    </a>
  );
};
