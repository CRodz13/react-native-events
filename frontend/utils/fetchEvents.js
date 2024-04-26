export async function fetchEvents() {
  const eventsApiUrl = "http://127.0.0.1:8000/api/events/";

  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(eventsApiUrl, requestOptions);
    console.log(response);
    if (response.ok) {
      const eventData = await response.json();
      return eventData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
