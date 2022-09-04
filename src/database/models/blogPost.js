const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
  }

  return BlogPostTable;
};

module.exports = BlogPostSchema;
