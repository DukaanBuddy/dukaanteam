import Joi from 'joi';

const taskValidationSchema = Joi.object({
    taskName: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Task name must contain only letters, numbers, and spaces.'),

    taskDescription: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Task description must contain only letters, numbers, and spaces.'),

    assignedTo: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Assigned to must contain only letters and spaces.'),

    completedBy: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Completed by must contain only letters and spaces.'),

    status: Joi.string().valid("to_do", "inProgress", "completed").default("to_do"),

    taskPriority: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Task priority must contain only letters and spaces.'),

    desiredTaskCompletionDate: Joi.date(),

    actualTaskCompletionDate: Joi.date(),

    tags: Joi.array().items(
        Joi.string()
            .regex(/^[a-zA-Z0-9\s]+$/)
            .message('Each tag must contain only letters, numbers, and spaces.')
    ),

    taskCreatedBy: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Task created by must contain only letters and spaces.'),

    businessUuid: Joi.string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .message('Business UUID must contain only letters, numbers, and hyphens.'),
})
    .options({ abortEarly: false, allowUnknown: true })
    .messages({
        'string.pattern.base': '{{#label}} has invalid characters.',
        'string.empty': '{{#label}} cannot be empty.',
        'any.required': '{{#label}} is required.',
        'date.base': '{{#label}} must be a valid date.',
        'array.base': '{{#label}} must be an array.',
        'array.unique': '{{#label}} must be unique.',
    });

export default taskValidationSchema;
