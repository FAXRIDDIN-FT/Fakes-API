import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/usaFetch";

const UserDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);
  <div id="user">{data && <UserDetail data={data} />}</div>;

  const { data, loading, error } = useFetch(`/users/${id}`);
  
  if (loading) return <div className="text-center py-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading user.</div>;

  return (
    <div className="container mx-auto px-4 py-10 my-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full bg-gray-200 flex items-center justify-center shadow-lg text-6xl text-white font-bold bg-blue-500">
            {data?.username?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {data?.username || "Unknown User"}
          </h1>
          <p className="text-gray-600 text-lg">
            📧 Email: {data?.email || "No email"}
          </p>
          <p className="text-gray-600 text-lg">
            📞 Phone: {data?.phone || "No phone"}
          </p>
          <p className="text-gray-600 text-lg">
            🏠 Address: {data?.address || "No address available"}
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
            Message User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
