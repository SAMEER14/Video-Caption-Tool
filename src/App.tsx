import { Provider } from 'react-redux'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import { store } from './Redux/Store'
import VideoInput from './Components/VideoInput'
import VideoPlayer from './Components/VideoPlayer'

function App() {
  
  return (
    <Provider store={store}>
        <HeaderComponent />
        <VideoInput />
        <VideoPlayer/>
    </Provider>
      
    
  )
}

export default App
