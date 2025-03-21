import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'

function App() {

  return (
    <>
      <Header />      
  
        {/* <!-- Main component  --> */}
        <main className ="main">
        
         <UserList />
         
        </main>
      
     
       <Footer /> 

    </>
  )
}

export default App
