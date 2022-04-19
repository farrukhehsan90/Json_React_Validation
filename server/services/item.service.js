const { itemModel } = require('../schema/item');

const createItem = async (itemBody) => {
    console.log(itemBody)
    return itemModel.create(itemBody);
};

const getItemById = async (id) => {
    return itemModel.deleteOne({id:id});
};

const getAllItems = async () => {
    return itemModel.find();
};

const updateItemById = async (itemId, updateBody) => {
    const item = await getItemById(itemId);
    console.log(item)
    if (!item) {
        return 'item not found'
        // throw new ApiError(httpStatus.NOT_FOUND, 'item not found');
    }
    Object.assign(item, updateBody);
    await itemModel.save();
    return item;
};

const deleteItemById = async (itemId) => {
    const item = await getItemById(itemId);
    console.log(item)
    if (!item) {
        return 'item not able to delete'
        // throw new ApiError(httpStatus.NOT_FOUND, 'item not found');
    }
    return item;
};

const queryItems = async (filter, options) => {
    //   const users = await itemModel.paginate(filter, options);
    //   return users;
};

module.exports = {
    createItem,
    queryItems,
    getItemById,
    getAllItems,
    updateItemById,
    deleteItemById,
};