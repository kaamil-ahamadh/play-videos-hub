import axios from "axios";

export const youtubeApiTrending = async () => {
  try {
    return await axios.get(
      "https://youtube-search-and-download.p.rapidapi.com/trending",
      {
        params: { type: "now", hl: "en", gl: "IN" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_RAPID_API_HOST,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const youtubeApiSearch = async (searchQuery) => {
  try {
    return await axios.get("https://youtube-v31.p.rapidapi.com/search", {
      params: {
        q: searchQuery,
        part: "snippet,id",
        regionCode: "IN",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_V3_API_HOST,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
