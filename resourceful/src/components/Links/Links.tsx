import "./Links.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Links = ({ data, subCategory }) => {

const [links, setLinks] = useState([])

    useEffect(() => { 
        const filterData = (data, subCategory) => { 
                 let uniqueSubcat = []
                 data.forEach((item) => { 
              if (item.subcategory === subCategory) { 
                 uniqueSubcat.push(item)
              }
              setLinks(uniqueSubcat)
             })
         }
         filterData(data,subCategory)
    },[])

console.log(links)

    return (
        <section className="links">
        {
         links.map((link) => <Link to={link.link} target="_blank" className="links__link link">
             <p className="links__title paragraph">{link.title}</p>
        </Link>)}
           
        </section>
    )
}

export default Links;