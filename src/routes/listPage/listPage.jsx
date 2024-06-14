import { listData } from "../../lib/dummydata"
import "./listPage.scss"
import Filter from "../../components/filter/filter.jsx";
import Card from "../../components/card/Card.jsx";

export default function ListPage() {
    const data = listData;
  return (
    <div className="listPage">
     <div className="listContainer">
        <div className="wrapper">
            <Filter />
            {data.map(item =>(
                <Card key = {item.id} item ={item} />
            ))}
        </div>
     </div>
     <div className="mapContainer"></div>
      
    </div>
  )
}
