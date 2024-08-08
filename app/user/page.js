export default async function User() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return (
    <>
     <div className="container mt-5">
      <h2>Users</h2>
        <ul>
        {data.map((data) => (
            <li>Firstname : {data.firstname}</li>
          ))}
        </ul>
     </div>
    </>
  );
}