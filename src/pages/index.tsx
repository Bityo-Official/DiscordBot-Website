import Navbar from "@/components/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Bityo Discord Bot</title>
      </Head>
      <div className="text-3xl text-center text-black dark:text-white">
        <h2>Bityo 是您的最佳夥伴！</h2>
      </div>
    </>
  )
}

export default Home;