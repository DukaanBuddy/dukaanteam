const Joi = require('joi');

module.exports.validateCreateProject = async (req, res, next) => {
    try {
        const schema = Joi.object({
            projectName: Joi.string().required().label("Project Name"),
            createdBy: Joi.number().required().label("Created By")
        })
        let { error } = schema.validate(req.body);
        if (error)
            return res.status(400).send({ status: 400, message: error.details[0].message });
        next()
    } catch (error) {
        next(error)
    }
}

