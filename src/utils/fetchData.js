// exercise name
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1082670bc1mshdccdb1a0942adb7p126f1cjsn3be0acb8e4d7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

// video
export const planOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1082670bc1mshdccdb1a0942adb7p126f1cjsn3be0acb8e4d7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
