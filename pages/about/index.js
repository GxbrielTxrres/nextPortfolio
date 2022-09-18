import Card from "../../components/card";
import Head from "next/head";
import Menu from "../../components/menu";

export default function Home() {
  return (
    <div>
      {/* metadata */}
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Card Component */}
      <Menu />
      <Card />
    </div>
  );
}
