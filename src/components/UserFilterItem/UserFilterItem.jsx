import cn from 'classnames';

export const UserFilterItem = ({ user, userFilter, changeUserFilter }) => {
  const {
    name,
  } = user;

  return (
    <a
      data-cy="FilterUser"
      href="#/"
      className={cn({
        'is-active': name === userFilter,
      })}
      onClick={() => changeUserFilter(name)}
    >
      {name}
    </a>
  );
};
