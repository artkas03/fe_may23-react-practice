import cn from 'classnames';
import { UserFilterItem } from '../UserFilterItem';

export const UserFilterList = ({ users, userFilter, changeUserFilter }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      className={cn({
        'is-active': userFilter === 'all',
      })}
      onClick={() => changeUserFilter('all')}
    >
      All
    </a>

    {users.map(user => (
      <UserFilterItem
        user={user}
        userFilter={userFilter}
        changeUserFilter={newUser => changeUserFilter(newUser)}
        key={user.id}
      />
    ))}
  </p>
);
