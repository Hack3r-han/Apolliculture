import video from './assets/videos/video2.mp4'
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Video from "./components/Video"
function App() {

  return (
    <>
       <div className="min-h-screen flex flex-col">
            <Filter />  
            <Video src={video}/>
            <Footer />
        </div>

    </>
  )
}

export default App
