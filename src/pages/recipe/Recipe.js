import { useParams } from "react-router-dom";

// style
import './Recipe.css'

// hooks
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

export default function Recipe() {
  const { id } = useParams()
  const url = 'https://cooking-ninja-json.herokuapp.com/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)
  const { mode } = useTheme()

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p> }
      {isPending && <p className="loading">Loading ...</p>}
      {recipe && (
        <div className="card">
          <h2 className="page-title">{recipe.title}</h2>
          <p className="cooking-time">Takes {recipe.cookingTime} to cook.</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <h3>Method:</h3>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  )
}
