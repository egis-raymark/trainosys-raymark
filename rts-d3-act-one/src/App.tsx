import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import PokemonCardComponent from './Components/PokemonCardComponent'


interface Pokemon{
  name: string
  height : number
  weight : number
  id: number
  img : string
  types: string[]
}

function App() {
  const [pokemonList,setPokemonList] = useState<Pokemon[]>([])
  
  useEffect(
    () => {
      async function FetchPokemonData() {
        try{
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=202&offset=251')

          const results = response.data.results
          
          const fetchedPokemonList : Pokemon[] = await Promise.all(
            results.map(async(pokemon : {url: string})=>{

              const pokemonDataResponse = await axios.get(pokemon.url)
              const pocketMon = pokemonDataResponse.data

              return{
                name: pocketMon.name,
                height: pocketMon.height,
                weight: pocketMon.weight,
                id: pocketMon.id,
                img: pocketMon.sprites.other.home.front_shiny,
                types :pocketMon.types.map(
                  (type : {type: {name:string}}) => type.type.name
                )
              }
            })
          )
            setPokemonList(fetchedPokemonList)
        }catch (error){
          console.error("Error Fetching Pokemondata:", error)
        }
      }
      FetchPokemonData()
    },[])

  return (
    <>

      <div id='root'>
        <div className='row'>
          
          {
            pokemonList.map(
              (pokemon:Pokemon) =>
              <div className='col mt-5'>
                <PokemonCardComponent 
                height={pokemon.height}
                id={pokemon.id}
                img={pokemon.img}
                name={pokemon.name}
                weight={pokemon.weight}
                types={pokemon.types} />
              </div>
            )
          }
          
        </div>
        

      </div>

    </>
  )
}

export default App
