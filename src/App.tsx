import { Provider } from 'react-redux'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import { store } from './Redux/Store'
import VideoInput from './Components/VideoInput'
import VideoPlayer from './Components/VideoPlayer'
import CaptionsInput from './Components/CaptionsInput'
// import CaptionsOverlay from './Components/CaptionsOverlay'

function App() {
  
  return (
    <Provider store={store}>
        <HeaderComponent />
        <VideoInput />
        <VideoPlayer/>
        <CaptionsInput />
        {/* <CaptionsOverlay currentTime={0} /> */}
    </Provider>
      
    
  )
}

export default App
