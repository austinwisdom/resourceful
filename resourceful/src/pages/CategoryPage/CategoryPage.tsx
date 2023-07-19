import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ResourcesResponse} from "../../types/types";
import Links from "../../components/Links/Links";
import backArrow from "../../assets/images/back-arrow.png";
import "./CategoryPage.scss";

const CategoryPage: React.FC = () => {
  const { id } = useParams();

  const [data, setData] = useState<ResourcesResponse[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try { 
        if(id) {
          const data = await axios.get<ResourcesResponse[]>(`http://localhost:8080/resources/${id}`);
          setData(data.data);
        }
      } catch(error) {
        console.log(error)
       }
    };
    getData().catch((error) => { 
      console.log(error)
    })
  }, [id]);

const subCategories = () => { 
       const subcategories: Array<string> = [];
        data!.map((item) => {
            subcategories.push(item.subcategory);
        });
    
        const uniqueSubcat: Array<string> = []
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
            src={`http://localhost:8080/icons/${id!.slice(0,4)}.png`}
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
      <img src={`http://localhost:8080/blobs/${id!.slice(0,4)}.png`} alt="red blob" className="category__blob" />
    </section>
  );
};

export default CategoryPage;
