import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5"
    }}>
      <h1>Hello, Hybrid WebApp 🚀</h1>
      <p>GitHub → Vercel 自動デプロイ成功！</p>

      {/* ここにリンクを追加 */}
      <p>
        <Link href="/about">👉 Aboutページへ移動</Link>
      </p>
    </div>
  );
}
