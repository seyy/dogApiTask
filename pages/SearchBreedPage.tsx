import Link from "next/link"
import NavButtons from "./NavButtons"
import "@/app/globals.css"
import {  useState } from "react"
import axios from "axios"






const SearchBreedPage: React.FC = () => {
  const [breedUserInput, setBreedUserInput] = useState('')
  const [randomImage, setRandomImage] = useState<string>('')


  const fetchImageByBreed = async (breedUserInput: string) => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breedUserInput}/images/random`)
      setRandomImage(response.data.message)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(`Breed ${breedUserInput} not found`)

      }
      console.error(error)
  }
  }
  
 


  return (
    <div className="flex flex-col items-center">
      <p className="mt-36 font-mono text-4xl">SEARCH FOR A BREED</p>
        <input className="rounded-xl w-[220px] h-[30px] text-sm pl-1 mt-12"
          value={breedUserInput}
          onChange={e => setBreedUserInput(e.target.value)}
          placeholder="Enter the breed"
        />
      <button onClick={(e) => {
        e.preventDefault()
        fetchImageByBreed(breedUserInput)
        setBreedUserInput("") // CLEARING THE INPUT
      }} 
        className="absolute top-[232px] ml-[400px] w-[170px] h-[30px]">
        DISPLAY THE IMAGE
      </button>
      
      {randomImage && <img className='mt-24 h-[300px] w-[400px]' src={randomImage} alt='Random Dog' /> }
      <NavButtons />
    </div>
  )
}

export default SearchBreedPage
