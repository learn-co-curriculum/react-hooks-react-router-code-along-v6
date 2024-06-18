import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({})
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.log(error))
  }, [userId])

  if(!user.name) return <h2>Loading...</h2>

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;
