import useAuthContext from "../context/AuthContext";

function Home() {
  const { user } = useAuthContext();

  return <div>{user?.name}</div>;
}

export default Home;
