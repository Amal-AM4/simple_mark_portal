const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const Student = require('./student'); // Import the student model

const MarkList = sequelize.define('Marklist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    m_uuid: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
        unique: true
    },
    examination_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    english: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hindi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_marked: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    studentId: {
        // type: DataTypes.STRING,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Students',
            key: 'id'
        }
    }
});

MarkList.belongsTo(Student, { foreignKey: 'studentId' }); // Define the relationship with Student model

module.exports = MarkList;