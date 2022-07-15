import { useParams } from "react-router-dom";

// style
import './Recipe.css'

// hooks
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className="recipe">
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
