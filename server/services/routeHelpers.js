const Joi = require('joi');

module.exports = {
  validateBody: schema => (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error);
    }

    if (!req.value) {
      req.value = {};
    }
    req.value.body = result.value;
    next();
  },

  schemas: {
    signInSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
    signUpSchema: Joi.object().keys({
      password: Joi.string().min(4).regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      passwordConf: Joi.string().required().valid(Joi.ref('password')),
      email: Joi.string().email().required(),
      admin: Joi.boolean(),
    }),
  },
};
