import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const { data: recipes, isPending, error} = useFetch('https://cooking-ninja-json.herokuapp.com/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
