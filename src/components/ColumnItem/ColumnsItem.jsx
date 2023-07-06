import cn from 'classnames';
import { useState } from 'react';

export const ColumnsItem = ({ column, columnSort }) => {
  const [clickNumber, setClickNumber] = useState(0);

  function handleClick() {
    if (clickNumber === 2) {
      setClickNumber(0);
    } else {
      setClickNumber(clickNumber + 1);
    }

    columnSort([column, clickNumber]);
  }

  return (
    <th>
      <span className="is-flex is-flex-wrap-nowrap">
        {column}

        <a
          href="#/"
          onClick={handleClick}
        >
          <span className="icon">
            <i
              data-cy="SortIcon"
              className={cn('fas', {
                'fa-sort': clickNumber === 0,
                'fa-sort-up': clickNumber === 1,
                'fa-sort-down': clickNumber === 2,
              })}
            />
          </span>
        </a>
      </span>
    </th>
  );
};
