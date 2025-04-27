import axios from "axios";

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }

  try {
    const [coursesRes, notesRes] = await Promise.all([
      axios.get(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
      ),
      axios.get(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
      ),
    ]);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        courses: coursesRes.data,
        notes: notesRes.data,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.toString() }),
    };
  }
}
