'use client';

import { useRouter } from 'next/navigation';

interface ICategoryProps {
  name: string;
}
export default function Category({ name }: ICategoryProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/list/${name}`);
  };

  return (
    <div onClick={handleClick}>
      <li>{name}</li>
    </div>
  );
}
