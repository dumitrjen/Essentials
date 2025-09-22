const express = require('express')
const app = express()
const port = 3000

// temp data einbinden
const recipes = require('../assets/temp-data').recipes

app.get('/recipes', (req, res) => {
  res.json(recipes);
})

// GET recipes/id
app.get('/recipes/:id', (req, res) => {git push -u origin main
    const id = req.params.id
    const recipe = recipes.find((recipe) => recipe.id === id)
    if(!recipe) 
      res.status(404).send('Recipe not found')

    res.json(recipe);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})