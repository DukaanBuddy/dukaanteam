import inventoryModel from "./inventoryModel";
export const createInventoryServices = async (inventoryData) => {
    const newInventory = inventoryModel(inventoryData);
    return await newInventory.save();
};

export const findOneInventoryService = async (query) => {
    return await inventoryModel.findOne(query).exec();
};
export const updateInventoryService = async (query, data) => {
    return await inventoryModel.findOneAndUpdate(
        query,
        { $set: data },
        { new: true }
    ).exec();
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
