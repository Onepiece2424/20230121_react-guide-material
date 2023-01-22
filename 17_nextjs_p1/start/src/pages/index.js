import Link from 'next/link'

export default function Home() {

  // Linkコンポーネントは画面遷移せずにパスを変更することができる。aタグは画面遷移しパスを変更する。
  return (
    <>
      <h1>Home</h1>
      <Link href="/07_router">
        <a>/07_router</a>
      </Link>
      <a href="/07_router">/07_router</a>
    </>
  )
}
