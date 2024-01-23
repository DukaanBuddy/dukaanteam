import expenceModel from "./expencesModel";
export const createExpenceServices = async (expenceData) => {
    const newExpence = expenceModel(expenceData);
    return await newExpence.save();
};

export const findOneExpenceService = async (query) => {
    return await expenceModel.findOne(query).exec();
};
export const updateExpenceService = async (query, data) => {
    return await expenceModel.findOneAndUpdate(
        query,
        { $set: data },
        { new: true }
    ).exec();
};
export const findAllExpenceServices = async (query) => {
    return await expenceModel.find(params).exec();
};
export const deleteOneExpenceServices = async (query) => {
    return await expenceModel.findOneAndDelete(query).exec();
};
export const deleteAllServices = async (query) => {
    return await expenceModel.remove(query).exec();
};
