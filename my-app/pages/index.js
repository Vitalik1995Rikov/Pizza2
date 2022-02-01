import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
      <h1>Main Page</h1>
    </div>
  );
};

export default Index;
