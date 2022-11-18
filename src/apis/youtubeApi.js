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
    return await axios.get(
      "https://youtube-search-and-download.p.rapidapi.com/search",
      {
        params: {
          query: searchQuery,
          next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
          hl: "en",
          gl: "IN",
          upload_date: "t",
          type: "v",
          duration: "s",
          features: "li;hd",
          sort: "v",
        },
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
