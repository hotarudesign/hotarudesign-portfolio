import Head from "next/head";
import { client } from "src/libs/client";
import { Header } from "src/component/Header";
import { WorksPosts } from "src/component/WorksPosts";
import { Footer } from "src/component/Footer";
import { WorksHead } from "src/component/WorksHead";

const Works = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <WorksHead />
      <WorksPosts props={props} />
      <Footer />
    </div>
  );
};
export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "works" });
  return {
    props: data,
  };
};

export default Works;
