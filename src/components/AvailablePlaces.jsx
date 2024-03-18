import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch places.");
        }
        setAvailablePlaces(responseData.places);
      } catch (error) {
        setError({ message: error.message || "An unknown error occured!" });
      }

      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error message={error.message} title="An error occured!" />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText="Loading places ..."
      isLoading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
