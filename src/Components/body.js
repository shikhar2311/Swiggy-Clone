// import { useState } from "react";
import { restaurantList } from "../constants"; 
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
  );
  return filterData;

}

const Body = () =>{

  const [searchText, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    console.log("Call this when dependency is changed");
  }, []);

    return (
      <>
      <div className="search- container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        />
        <button 
        className="search-btn"
        onClick={() =>{
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
      {
        restaurants.map((restaurant) =>{
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
      }
      </div>
      </>
    )
  }

  export default Body;