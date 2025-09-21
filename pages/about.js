import Link from 'next/link';

export default function About() {
  return (
    <div style={{
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#e0f7fa"
    }}>
      <h1>About Page</h1>
      <p>これは Next.js で作成した About ページです 🚀</p>

      <p>
        <Link href="/">🏠 ホームに戻る</Link>
      </p>
    </div>
  );
}
