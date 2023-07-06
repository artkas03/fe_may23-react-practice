export const CategoryInfo = ({ category }) => {
  const {
    title,
    icon,
  } = category;

  return (
    <td data-cy="ProductCategory">
      <span role="img" aria-label="">
        {icon}
      </span>
      {` - ${title}`}
    </td>
  );
};
