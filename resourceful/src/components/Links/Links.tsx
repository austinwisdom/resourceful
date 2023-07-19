import "./Links.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResourcesResponse } from "../../types/types";

interface Props { 
    data: ResourcesResponse[]
    subCategory: string
}
const Links: React.FC<Props> = ({ data, subCategory }) => {

const [links, setLinks] = useState<ResourcesResponse[]>([])

    useEffect(() => { 
        const filterData = (data:ResourcesResponse[], subCategory:string ) => { 
                 const uniqueSubcat: Array<ResourcesResponse> = []
                 data.forEach((item) => { 
              if (item.subcategory === subCategory) { 
                 uniqueSubcat.push(item)
              }
              setLinks(uniqueSubcat)
             })
         }
         filterData(data,subCategory)
    },[data, subCategory])

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