module.exports = (sequelize, dataTypes) => {
    const book = sequelize.define('Booke', {
        title: dataTypes.STRING,
        author: dataTypes.STRING,
        pageQuantity: dataTypes.INTEGER,
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
    });

    return book;
};