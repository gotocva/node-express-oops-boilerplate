


import BaseConfig from './Base';
import Mongoose from './mongoose';



const config = new BaseConfig();

const mongoose = new Mongoose();


module.exports = { config, mongoose };