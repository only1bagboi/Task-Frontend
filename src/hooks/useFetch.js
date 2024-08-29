import { useEffect, useState } from "react";
// custom hokk to fetch data from a provided insider container based uRL in app.jsx
export const useFetch = (url) => {
  const [data, setData] = useState(null); //State to contolr the fetched data,initially null

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect hook to perform the sid effects aaand fetching in this acse

  useEffect(() => {
    const getData = async () => {
      //asnc function to fetch data
      const response = await fetch(url); //feth the data from the providd utl
      const jData = await response.json(); //Parse respond jSon data and keep inside jData

      setData(jData.tasks ? jData.tasks : jData.task);
      //Update tge [data] state that was formally null with setData,,, updating data with fetched data
      setLoading(false);
      console.log(jData);
    };

    setTimeout(async () => {
      try {
        await getData();
      } catch (error) {
        console.log(error);
        setError("opps! something went wrong");
        setLoading(false);
      } //envoke the function
    }, 3000);
  }, []);
  return { data, setData, loading, error }; // return an object containing data
};
