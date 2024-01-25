import inventoryModel from "./inventoryModel.js";
import itemValidationSchema from "./inventory.validator.js";

export const createInventoryServices = async (inventoryData) => {
    try {
        await itemValidationSchema.validateAsync(inventoryData, { abortEarly: false });

        const newInventory = inventoryModel(inventoryData);
        return await newInventory.save();
    } catch (error) {
        throw new Error(`Error creating inventory: ${error.message}`);
    }
};

export const findOneInventoryService = async (query) => {
    return await inventoryModel.findOne(query).exec();
};

export const updateInventoryService = async (query, data) => {
    try {
        await itemValidationSchema.validateAsync(data, { abortEarly: false });

        return await inventoryModel.findOneAndUpdate(
            query,
            { $set: data },
            { new: true }
        ).exec();
    } catch (error) {
        throw new Error(`Error updating inventory: ${error.message}`);
    }
};

export const findAllInventoryServices = async (query) => {
    return await inventoryModel.find(query).exec();
};

export const deleteOneInventoryServices = async (query) => {
    return await inventoryModel.findOneAndDelete(query).exec();
};

export const deleteAllServices = async (query) => {
    return await inventoryModel.remove(query).exec();
};
