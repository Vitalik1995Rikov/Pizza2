import { useRouter } from 'next/router';

const User = () => {
  const { query } = useRouter();

  return <div>Пользователь c id {query.id}</div>;
};

export default User;
