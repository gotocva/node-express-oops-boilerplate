
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default class BaseConfig {

    constructor() {
        this.express = express;
        this.expressApp = new express();
        this.mongoose = mongoose;
        this.ENV = dotenv.config().parsed;
    }
}

