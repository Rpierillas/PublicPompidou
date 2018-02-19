/*
 * Npm import
 */
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

/*
 * Local import
 */
const Authentication = require('./controllers/authentication');
const Game = require('./controllers/game');
const Admin = require('./controllers/admin');
const passportService = require('./services/passport');
const factions = require('./databases/factions');
const { validateBody, schemas } = require('./services/routeHelpers');
const { findScene } = require('./utils/sceneUtils');

/*
 * Code
 */
module.exports = (app) => {
  // Any incoming request must pass through requireAuth to continue
  app.get('/', requireAuth, (req, res) => {
    res.send({ User: 'Successfully Authenticated for Root Route' });
  });

  // Adding (middleware): 'requireSignin'
  // - Prevent User(s) from accessing '/signin' route (see user model)
  // - Receive unique JWT Token in return
  app.post('/signin', validateBody(schemas.signInSchema), requireSignin, Authentication.signin);

  // Where User(s) register with unique email/password
  app.post('/signup', validateBody(schemas.signUpSchema), Authentication.signup);

  // retreive scene by currentScene
  app.post('/scenes', (req, res) => {
    const { current } = req.body;
    const scene = findScene(current);
    res.json(scene);
  });

  // Send all the factions' informations
  app.get('/factions', (req, res) => {
    res.json(factions);
  });

  app.post('/begin', requireAuth, Game.saveIntro);

  app.post('/save', requireAuth, Game.saveNewAction);

  app.get('/profile', requireAuth, Game.loadGames);

  app.get('/admin', requireAuth, Admin.isAdmin);

  app.get('/check', requireAuth, Game.checkLastGame);

  app.post('/previous', requireAuth, Game.loadPreviousGame);

  app.post('/findUser', requireAuth, Admin.userFind);

  app.post('/role', requireAuth, Admin.changeRole);

  app.post('/delete', requireAuth, Admin.deleteUser);
};
