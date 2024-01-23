
import Joi from 'joi';

const taskValidationSchema = Joi.object({
    taskId: Joi.string().required(),
    taskName: Joi.string(),
    taskDescription: Joi.string(),
    assignedTo: Joi.string(),
    completedBy: Joi.string(),
    status: Joi.string().valid("to_do", "inProgress", "completed").default("to_do"),
    taskPriority: Joi.string(),
    desiredTaskCompletionDate: Joi.date(),
    actualTaskCompletionDate: Joi.date(),
    tags: Joi.array().items(Joi.string()),
    taskCreatedBy: Joi.string(),
    businessUuid: Joi.string().required(),
}).options({ abortEarly: false, allowUnknown: true });

export default taskValidationSchema;
