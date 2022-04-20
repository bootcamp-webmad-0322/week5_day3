const router = require("express").Router()

const CharactersService = require('./../service/api.service')
const service = new CharactersService()

router.get('/list', (req, res, next) => {

  service
    .getAllCharacters()
    .then(({ data }) => res.render('pages/characters-list', { characters: data }))
    .catch(err => console.log(err))
})


router.get('/create', (req, res, next) => {
  res.render('pages/new-character-form')
})

router.post('/create', (req, res, next) => {

  const character = { name, weapon, occupation } = req.body

  service
    .createCharacter(character)
    .then(() => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})



router.get('/edit/:character_id', (req, res, next) => {

  const { character_id } = req.params

  service
    .getOneCharacter(character_id)
    .then(({ data }) => res.render('pages/edit-character-form', { character: data }))
    .catch(err => console.log(err))
})


router.post('/edit', (req, res, next) => {

  const { characterId, name, weapon, occupation } = req.body
  const characterInfo = { name, weapon, occupation }

  service
    .editCharacter(characterId, characterInfo)
    .then(() => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})



router.get('/delete/:character_id', (req, res, next) => {

  const { character_id } = req.params

  service
    .deleteCharacter(character_id)
    .then(() => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})


module.exports = router;
