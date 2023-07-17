import "./CategoryPage.scss";
import htmlIcon from "../../assets/icons/html+css.png";
import redBlob from "../../assets/images/red-blob.png";
import Links from "../../components/Links/Links";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      <div className="category__main-container">
        <div className="category__header">
          <img
            src={htmlIcon}
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
      <img src={redBlob} alt="red blob" className="category__blob" />
    </section>
  );
};

export default CategoryPage;
