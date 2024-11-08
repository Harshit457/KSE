import React, { useState, useEffect } from "react";
import Firstcard from "../components/Firstcard";
import Firstnav from "../components/Firstnav";
import axios from "axios";
import { useParams } from "react-router-dom";
function First() {
  const [temp, setTemp] = useState(0); // Tracks how many items have been fetched
  const [cardsData, setCardsData] = useState([]); // Store cards data from backend
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false); // Track if there are more cards to load
  const { username } = useParams();

  useEffect(() => {
    fetchData(0, 9); // Initial fetch of the first set of cards
  }, []);

  // Fetch data function with pagination
  async function fetchData(skip, limit) {
    if (loading) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("authorization");
      const response = await axios.get(
        `http://localhost:3000/signin/first/post/query?limit=${limit}&skip=${skip}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      // Update temp to track total items loaded so far
      setTemp(skip + data.length);

      // Filter out duplicate items
      const newCards = data.filter(
        (item) =>
          !cardsData.some((existingItem) => existingItem._id === item._id)
      );

      setCardsData((prevData) => [...prevData, ...newCards]);

      // Determine if there are more items to load
      setHasMore(data.length === limit);
      if (data.length > limit) {
        setHasMore(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  return (
    <div id="firstid" className="min-h-screen bg-zinc-900 flex flex-col">
      <Firstnav username={username} />
      <div className="flex justify-evenly w-full overflow-y-auto flex-wrap bg-zinc-900">
        {cardsData.map((item) => (
          <Firstcard key={item._id} {...item} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={() => fetchData(temp, 9)} // Fetch next set of items
          className="mt-4 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
      {loading && <div className="text-white">Loading more cards...</div>}
    </div>
  );
}

export default First;
