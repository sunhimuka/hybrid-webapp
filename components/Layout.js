// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      {/* ヘッダー（共通ナビゲーション） */}
      <header style={{ padding: "1rem", background: "#f0f0f0" }}>
        <nav>
          <Link href="/">Home</Link> |{" "}
          <Link href="/about">About</Link>
        </nav>
      </header>

      {/* ページごとの中身 */}
      <main style={{ padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}
