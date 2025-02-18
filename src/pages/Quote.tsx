import React, { useState, useEffect } from "react";

interface Quote {
  quote: string;
  author: string;
}

const Quote: React.FC = () => {
  const [data, setData] = useState<Quote | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { 
          "X-Api-Key": "8zkIAtIUEfiHU5UuWv3L7w==K7MeD22iGtAqzVip" // Replace with your real API key
        },
      });
  
      if (!response.ok) {
        throw  Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json)
      setData(json[0]); // API returns an array, so get the first quote
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  
  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-4 rounded-lg shadow-md w-96 text-center">
        {data ? (
          <>
            <p className="text-lg font-semibold my-4">"{data.quote}"</p>
            <p className="text-sm text-gray-500 mt-2">- {data.author}</p>
            <button
              onClick={fetchData}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
            >
              New Quote
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Quote;
