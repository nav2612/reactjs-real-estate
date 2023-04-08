import { useState } from "react";
import Title from "./Title";
import FlatItem from "./FlatItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FlatList = () => {
  const title = {
    text: "Explore the open houses",
    description: "Check out the properties near you",
  };

  
 
  const flats = [
  {
    id: 1,
    slug: "lorem-ipsum-1",
  },
  {
    id: 2,
    slug: "lorem-ipsum-2",
  },
  {
    id: 3,
    slug: "lorem-ipsum-2",
  },
  {
    id: 4,
    slug: "lorem-ipsum-2",
  },
  {
    id: 5,
    slug: "lorem-ipsum-2",
  },
  {
    id: 6,
    slug: "lorem-ipsum-2",
  },
  {
    id: 7,
    slug: "lorem-ipsum-2",
  },
  {
    id: 8,
    slug: "lorem-ipsum-2",
  },
  {
    id: 9,
    slug: "lorem-ipsum-2",
  },
  {
    id: 10,
    slug: "lorem-ipsum-2",
  },
  {
    id: 11,
    slug: "lorem-ipsum-2",
  },
  {
    id: 12,
    slug: "lorem-ipsum-2",
  },
  {
    id: 13,
    slug: "lorem-ipsum-2",
  }
];

  const [currentPage, setCurrentPage] = useState(1);
  const flatsPerPage = 9;
  const indexOfLastFlat = currentPage * flatsPerPage;
  const indexOfFirstFlat = indexOfLastFlat - flatsPerPage;

  const [sortOption, setSortOption] = useState("priceAsc");
  const sortOptions = {
    priceAsc: "Price: Low to High",
    priceDesc: "Price: High to Low",
    areaAsc: "Area: Small to Large",
    areaDesc: "Area: Large to Small",
  };

  let flatsToShow = flats.slice(indexOfFirstFlat, indexOfLastFlat);

  // sort flats based on the selected option
  if (sortOption === "priceAsc") {
    flatsToShow = flatsToShow.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceDesc") {
    flatsToShow = flatsToShow.sort((a, b) => b.price - a.price);
  } else if (sortOption === "areaAsc") {
    flatsToShow = flatsToShow.sort((a, b) => a.area - b.area);
  } else if (sortOption === "areaDesc") {
    flatsToShow = flatsToShow.sort((a, b) => b.area - a.area);
  }

  const totalPages = Math.ceil(flats.length / flatsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="sort-filter">
        <button> <FontAwesomeIcon icon={faFilter} /> Filters</button>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            {Object.keys(sortOptions).map((option) => (
              <option key={option} value={option}>
                {sortOptions[option]}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          {flatsToShow.map((flat) => (
            <FlatItem key={flat.id} slug={flat.slug} />
          ))}
        </div>
        <div className="pagination" style={{ display: "flex", justifyContent: "center" }}>
          {currentPage > 1 && (
            <button onClick={handlePrevPage}>Previous</button>
          )}
          <span>
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages && (
            <button onClick={handleNextPage}>Next</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlatList;