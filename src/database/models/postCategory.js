const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategoryTable,
        foreignKey: 'postId',
        otherKey: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, {
        as: 'blogpost',
        through: PostCategoryTable,
        foreignKey: 'categoryId',
        otherKey: 'postId'
    });
}

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
