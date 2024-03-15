import { Categories } from '../../api/category-data';
import Header from '../components/header/Header';
import video from "../../src/assets/videos/video2.mp4";
import Filter from "../components/filter/Filter";
import Video from "../components/video/Video";


export default function Homepage() {
  return (
      <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Categories.map((category) => (
          <div key={category.id} className="text-center">
            <img
              src={category.image}
              alt={category.name}
              className="mx-auto w-45 h-45 rounded mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
            <p className="text-sm">{category.description}</p>
          </div>
        ))}
        </div>
        <Filter />  
        <Video src={video}/>
        
    </div>
  );
}