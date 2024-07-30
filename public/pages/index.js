import Header from '../components/Header';
import Carousel from '../components/Carousel';
import InfiniteScrollComponent from '../components/InfiniteScroll';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>KukuFM Landing Page</title>
        <meta name="description" content="KukuFM Landing Page with Infinite Scroll and Auto Slider Carousel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Carousel />
        <InfiniteScrollComponent />
      </main>
    </>
  );
}
