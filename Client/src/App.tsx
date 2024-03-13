import Navbar from './components/navbar/Navbar'
import video from './assets/videos/video2.mp4'
import Filter from "./components/filter/Filter"
import Footer from "./components/footer/Footer"
import Video from "./components/video/Video"
import Homepage from "./pages/Home"

function App() {

  return (
    <>
       <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Homepage/>
            <Filter />  
            <Video src={video}/>
            <Footer />
        </div>

    </>
  )
}

export default App
