
const { STRING } = require("sequelize");
const {db, DataTypes, Model} = require("./db/connection.js");

class Post extends Model{};
Post.init(
  {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING
}, {
  sequelize: db,
  modelName: "Post"
});
let Post;


module.exports = Post;