import React, { useEffect, useState } from "react";

export default function SelectInput({
  onInputChanged,
  qualities,
}: {
  onInputChanged: (value: string) => void; // Update the prop type
  qualities: string[];
}) {
  const [selectedQuality, setSelectedQuality] = useState<string>("");

  useEffect(() => {
    onInputChanged(selectedQuality); // Call the prop with the selected quality
  }, [selectedQuality]);

  return (
    <div>
      <label
        htmlFor="quality"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a quality
      </label>
      <select
        id="quality"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
        value={selectedQuality} // Set the value from state
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedQuality(event.target.value); // Update the selected quality in state
        }}
      >
        <option value="">Choose a quality</option>
        {qualities.map((quality, i) => (
          <option key={i} value={quality}>
            {quality}
          </option>
        ))}
      </select>
    </div>
  );
}
