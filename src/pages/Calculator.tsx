import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>(""); // state to track input

  const handleButtonClick = (value: string) => {
    // Append the clicked button value to the input
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    // Clear the input
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // const handleDelete = () => {
  //   // Delete the last character in the input
  //   setInput(input.slice(0, -1));
  // };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        {/* Display */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            value={input} // Show the current input
            readOnly
            className="w-full p-4 text-right text-xl border border-gray-300 rounded-md"
          />
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-4">
          {/* First Row */}
          <button
            className="bg-red-400 p-4 text-l rounded-md text-white hover:bg-red-500"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("(")}
          >
            (
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick(")")}
          >
            )
          </button>
          <button
            className="bg-green-500 p-4 text-xl rounded-md text-white hover:bg-green-600"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>

          {/* Second Row */}
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="bg-green-500 p-4 text-xl rounded-md text-white hover:bg-green-600"
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>

          {/* Third Row */}
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="bg-green-500 p-4 text-xl rounded-md text-white hover:bg-green-600"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>

          {/* Fourth Row */}
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-green-500 p-4 text-xl rounded-md text-white hover:bg-green-600"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>

          {/* Fifth Row */}
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("%")}
          >
            %
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-200 p-4 text-xl rounded-md hover:bg-gray-300"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="bg-blue-500 p-4 text-xl rounded-md text-white hover:bg-blue-600"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
