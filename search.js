import { DataTypes } from 'sequelize';
import sequelize from './db.js';
import User from './user.js';

const Search = sequelize.define('Search', {
    query: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resultCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Relația părinte-copil
User.hasMany(Search, { foreignKey: 'userId' });
Search.belongsTo(User, { foreignKey: 'userId' });

export default Search;
