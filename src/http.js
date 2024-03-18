export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  return responseData.places;
}

export async function updateUserPlaceS(places) {
  response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: { "Content-Type": "application/json" },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Failed to update user data.");
  }

  return resData.message;
}
