import axios from "axios";
import ListFriends from '../../sources/view/listFriends/ListFriends';

export default function AdsPage({ users }) {
  return <ListFriends users={users} />;
}

export async function getStaticProps(props) {
  const users = await axios.get(`http://localhost:3030/users`);

  return {
    props: {
      users: users.data,
    },
    revalidate: 60,
  };
}
