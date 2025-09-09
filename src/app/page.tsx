// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import '../app/globals.css';

export default function Welcome() {
  return (
    <div className="welcomeContainer">
      <Head>
        <title>Chào mừng</title>
      </Head>

      <div className="welcomeBox">
        <h1>Chào mừng bạn đến với CV của tôi</h1>
        <p>Nguyễn Đình Huân - Thực Tập Front End</p>
        <Link href="/page/cv" passHref>
          <button className="welcomeButton">Nhấn Xem CV</button>
        </Link>
      </div>
    </div>
  );
}