import "./CategoryPage.scss";
import Links from "../../components/Links/Links";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.png";

const CategoryPage = () => {
  const { id } = useParams();
console.log(id)
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`http://localhost:8080/resources/${id}`);
      setData(data.data);
    };
    getData();
  }, []);

const subCategories = () => { 
        let subcategories = [];
        data.map((item) => {
            subcategories.push(item.subcategory);
        });
    
        let uniqueSubcat = []
        subcategories.forEach((subcat) => { 
        if(!uniqueSubcat.includes(subcat)){ 
            uniqueSubcat.push(subcat)
        }
    })
  return uniqueSubcat
}

  return (
    <section className="category">
        <Link to="/" className="category__link">
            <img src={backArrow} alt="back arrow" className="category__back-arrow"/>
        </Link>
        
      <div className="category__main-container">
        <div className="category__header">
          <img
            src={`http://localhost:8080/icons/${id.slice(0,4)}.png`}
            alt="html and css icons"
            className="category__icon"
          />
          {data && (
            <h2 className="category__title title">{data[0].category}</h2>
          )}
        </div>
        <div className="category__content-wrapper">
         {data && subCategories().map((item, index) => ( 
        <div key={index} className="category__subsection"> 
          <h4 className="category__subtitle subtitle">{item}</h4>
         <Links data={data} subCategory={item}/>
          </div>))}
        </div>
      </div>
      <img src={`http://localhost:8080/blobs/${id.slice(0,4)}.png`} alt="red blob" className="category__blob" />
    </section>
  );
};

export default CategoryPage;
