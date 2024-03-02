import Header from "./components/Header"
import video from "./assets/videos/video2.mp4"
import Footer from "./components/Footer"
function App() {

  return (
    <>
       <div className="min-h-screen flex flex-col">  
            <Header src={video}/>
            <Footer />
        </div>
    </>
  )
}

export default App
