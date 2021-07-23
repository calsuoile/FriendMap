import Connection from "../../sources/view/connection/Connection";

export default function AProposPage() {
  return <Connection />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
