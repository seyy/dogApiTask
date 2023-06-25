"use client"
import MainPage from './modules/MainPage'
import NavButtons from './modules/navButtons'

const Home: React.FC = () => { 

  return (
    <main className='flex items-center justify-center'>
      <div className='flex justify-center'>
        <MainPage />
        <NavButtons />
      </div>
    </main>
   
  )
}

export default Home
