import { CategoryInfo } from '../CategotyInfo';
import { UserInfo } from '../UserInfo';

export const Product = ({ product }) => {
  const {
    id,
    name,
    category,
    user,
  } = product;

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {id}
      </td>

      <td data-cy="ProductName">
        {name}
      </td>

      <CategoryInfo category={category} />
      <UserInfo user={user} />
    </tr>
  );
};
