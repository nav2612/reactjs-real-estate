import { useState } from "react";
import Title from "./Title";
import FlatItem from "./FlatItem";

const FlatList = () => {
  const title = {
    text: "Explore the listings near you",
    description: "Check out the properties",
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
  const flatsToShow = flats.slice(indexOfFirstFlat, indexOfLastFlat);

  const totalPages = Math.ceil(flats.length / flatsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
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