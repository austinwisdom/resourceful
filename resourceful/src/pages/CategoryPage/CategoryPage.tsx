import { useState } from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";
import Links from "../../components/Links/Links";
import backArrow from "../../assets/images/back-arrow.png";
import { ResourcesResponse } from "../../types/types";
import "./CategoryPage.scss";
import { AxiosResponse } from "axios";
import Search from "../../components/Search/Search";

const CategoryPage: React.FC = () => {
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const response = useLoaderData() as AxiosResponse;
  const data = response.data as ResourcesResponse[];
  const filteredData = data?.filter((resource: ResourcesResponse) => {
    if (search === "") {
      return true;
    } else {
      return resource.title.toLowerCase().includes(search) || resource.subcategory.toLowerCase().includes(search);
    }
  });

  const subCategories = () => {
    const subcategories: Array<string> = [];
    filteredData.map((item) => {
      subcategories.push(item.subcategory);
    });

    const uniqueSubcat: Array<string> = [];
    subcategories.forEach((subcat) => {
      if (!uniqueSubcat.includes(subcat)) {
        uniqueSubcat.push(subcat);
      }
    });
    return uniqueSubcat;
  };

  return (
    <section className="category">
        <div className="category__navigation">
            <Link to="/" className="category__link">
                <img
                    src={backArrow}
                    alt="back arrow"
                    className="category__back-arrow"
                />
            </Link>
            <Search setSearch={setSearch} />
        </div>
      <div className="category__main-container">
        <div className="category__header">
          <img
            src={`http://localhost:8080/icons/${id!.slice(0, 4)}.png`}
            alt="html and css icons"
            className="category__icon"
          />
          {filteredData && filteredData.length !== 0 ? (
            <h2 className="category__title title">
              {filteredData[0].category}
            </h2>
          ): <h2 className = "category__title title">No results found</h2>}
        </div>
        <div className="category__content-wrapper">
          {filteredData && filteredData.length !== 0 ?
            subCategories().map((item, index) => (
              <div key={index} className="category__subsection">
                <h4 className="category__subtitle subtitle">{item}</h4>
                <Links data={filteredData} subCategory={item} />
              </div>
            )): null}
        </div>
      </div>
      <img
        src={`http://localhost:8080/blobs/${id!.slice(0, 4)}.png`}
        alt="red blob"
        className="category__blob"
      />
    </section>
  );
};

export default CategoryPage;
