'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Error</h1>
      <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <p>홈페이지로 이동해 주세요.</p>
      <Link href={'/'}>Home</Link>
    </div>
  );
}
