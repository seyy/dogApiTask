"use client"
import axios from 'axios'
import { useState, useEffect } from 'react'



const Home = () => { 
  const [breeds, setBreeds] = useState<String[]>([])
  const [selectedBreed, setSelectedChoice] = useState('')
  const [randomImage, setRandomImage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchBreedsApi()
  }, [])



{/* FETCHING THE LIST OF ALL BREEDS */}

  const fetchBreedsApi = async () => {
    try{
      setIsLoading(true)
      const response = await axios.get('https://dog.ceo/api/breeds/list/all')
      const breedNames = Object.keys(response.data.message)
      setBreeds(breedNames)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  {/* THIS FUNCTION IS CHANGING THE VALUES WHEN THE BREED IS CHANGED BY A USER */}

  const handleBreedChange = async (event: { target: { value: any } }) => {
    const selectedValue = event.target.value
    setSelectedChoice(selectedValue)
    await fetchRandomImageSelectedBreed(selectedValue)
    }
  


  {/* FETCHING A RANDOM IMAGE OF SELECTED BY USER BREED OF DOG */}

  const fetchRandomImageSelectedBreed = async (breed: string) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      setRandomImage(response.data.message)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }



  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mt-36 font-mono text-4xl">DOG BREEDS LIST</p>
        <select
        onChange={handleBreedChange}
        className="mt-12 bg-slate-100 hover:bg-slate-200 transition-all rounded-lg w-[220px]"
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {randomImage && <img className=' mt-24 h-[300px] w-[400px]' src={randomImage} alt='Random Dog' /> }
      </div>
    </main>
  )
}

export default Home
