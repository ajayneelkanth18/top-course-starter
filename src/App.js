
import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";

const App = () => {

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [likedCourse, setLikedCourse] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourse(output.data);
      }
      catch (error) {
        console.log("Something went wrong");
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 App">

      <NavBar />

      <div className="bg-bgDark2">

        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">

          {
            loading ? (
              <Spinner />
            ) : (
              <Cards
    course={course} category={category}
    likedCourse={likedCourse}
    setLikedCourse={setLikedCourse}
/>
            )
          }

        </div>

      </div>

    </div>
  );
};

export default App;
