import Joi from 'joi';

const itemValidationSchema = Joi.object({
    businessUuid: Joi.string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .message('Business UUID must contain only letters, numbers, and hyphens.'),
    // .required(),

    // itemID: Joi.string(),

    itemCategory: Joi.string(),

    itemName: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Item name must contain only letters, numbers, and spaces.'),

    sku: Joi.string()
        .regex(/^[a-zA-Z0-9]+$/)
        .message('SKU must contain only letters and numbers.'),

    hsnNumber: Joi.string()
        .regex(/^[0-9]{4}$/)
        .message('HSN number must be a 4-digit number.'),

    brandName: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Brand name must contain only letters, numbers, and spaces.'),

    subCategory: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Subcategory must contain only letters, numbers, and spaces.'),

    weight: Joi.number()
        .positive()
        .message('Weight must be a positive number.'),

    itemSize: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Item size must contain only letters, numbers, and spaces.'),

    itemQuantity: Joi.number()
        .integer()
        .positive()
        .message('Item quantity must be a positive integer.'),

    unitQuantity: Joi.number(),

    unitSize: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Unit size must contain only letters, numbers, and spaces.'),

    unitWeight: Joi.number()
        .positive()
        .message('Unit weight must be a positive number.'),

    numberOfItemsPerUnit: Joi.number()
        .integer()
        .positive()
        .message('Number of items per unit must be a positive integer.'),

    salePrice: Joi.number()
        .positive()
        .message('Sale price must be a positive number.'),


    mrpPerUnit: Joi.number()
        .positive()
        .message('MRP per unit must be a positive number.'),

    totalInventoryValue: Joi.number()
        .positive()
        .message('Total inventory value must be a positive number.'),

    totalInventoryVolume: Joi.number()
        .positive()
        .message('Total inventory volume must be a positive number.'),

    itemPicture: Joi.string()
        .regex(/^https?:\/\/.+/)
        .message('Item picture must be a valid URL.'),

    stockInHand: Joi.number()
        .integer()
        .positive()
        .message('Stock in hand must be a positive integer.'),
    shelfCapacity: Joi.number(),

    itemStatus: Joi.string()
        .valid("Damaged", "To be sold"),

    netAmount: Joi.number()
        .positive()
        .message('Net amount must be a positive number.'),

    discount: Joi.number()
        .positive()
        .message('Discount must be a positive number.'),
    sac: Joi.string()
        .regex(/^[a-zA-Z0-9-]+$/)
        .message('Service Code must contain only letters, numbers, and hyphens.'),

    color: Joi.string()
        .regex(/^[a-zA-Z]+$/)
        .message('Color must contain only letters.'),

    size: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Size must contain only letters, numbers, and spaces.'),

    productDescription: Joi.string()
        .regex(/^[a-zA-Z0-9\s.,'-]+$/)
        .message('Product description must contain only letters, numbers, spaces, and common punctuation.'),

    lastTransactionDate: Joi.date(),

    purchasePrice: Joi.number()
        .positive()
        .message('Purchase price must be a positive number.'),

    gstPercentage: Joi.number()
        .positive()
        .message('GST percentage must be a positive number.'),

    subscriptionEligible: Joi.boolean().default(false),
}).options({ abortEarly: false, allowUnknown: true });

export default itemValidationSchema;
