import Link from "next/link"
import "@/app/globals.css"


const NavButtons: React.FC = () => {


    return (
        <div className="absolute bottom-[200px] flex gap-3">
            
            <Link href="/ListBreedPage">
                <button>LIST</button>
            </Link>

            <Link href="/SearchBreedPage">
                <button>SEARCH</button>
            </Link>   
           
        </div>
    )
}

export default NavButtons