import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/usaFetch";

const Users = () => {
  const { data } = useFetch("/users");
  
  
  const navigate = useNavigate(); 
  if (!data) {
    return <div className="text-center text-lg py-10">Loading...</div>;
  }

  return (
    <div
      id="users"
      className="my-[100px] pt-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {data.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {user.username || "No Name"}
          </h2>
          <p className="text-gray-600">📞 {user.phone || "No phone number"}</p>
          <p className="text-gray-600">✉️ {user.email || "No email"}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            See More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;

