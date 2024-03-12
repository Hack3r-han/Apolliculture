import Navbar from './components/Navbar'
import video from './assets/videos/video2.mp4'
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Video from "./components/Video"
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
