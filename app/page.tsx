"use client"
import ListBreedPage from '@/pages/ListBreedPage'
import NavButtons from '@/pages/NavButtons'


const Home: React.FC = () => { 
  
  return (
    <main className='flex justify-center items-center'>
      <div className='flex justify-center'>
        <ListBreedPage />
        <NavButtons />
      </div>
    </main>
   
  )
}

export default Home
