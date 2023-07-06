import cn from 'classnames';

export const UserInfo = ({ user }) => {
  const {
    name,
    sex,
  } = user;

  return (
    <td
      data-cy="ProductUser"
      className={cn({
        'has-text-link': sex === 'm',
        'has-text-danger': sex === 'f',
      })}
    >
      {name}
    </td>
  );
};
