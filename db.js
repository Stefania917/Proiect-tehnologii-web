import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('BINGSEARCH_MANAGER', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default sequelize;
