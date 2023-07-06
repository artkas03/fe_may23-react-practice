import { ColumnsItem } from '../ColumnItem';
import { Product } from '../Product';

export const Productlist = ({ products, columnSort }) => {
  const columns = ['ID', 'Product', 'Category', 'User'];

  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          {columns.map(column => (
            <ColumnsItem
              column={column}
              key={column}
              columnSort={newSort => columnSort(newSort)}
            />
          ))}
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};
