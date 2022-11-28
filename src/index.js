
// package imports 
import https from 'https';
import http from 'http';
import chalk from 'chalk';
import socketIO from 'socket.io';

// local imports
import { config, mongoose } from './config/index';
import RouteServiceProvider from './providers/route-service-provider';
import SocketConfig from './config/socket';

const routeServiceProvider = new RouteServiceProvider();
const socketConfig = new SocketConfig();

mongoose.connectDB();

const io = socketIO(server);
io.on('connection',socketConfig.onConnection);

// Enable to serve https server
// const options = {
//     key: fs.readFileSync(config.HTTPS_KEY_PATH),
//     cert: fs.readFileSync(config.HTTPS_CERT_PATH)
// }
// const server = https.createServer(options, app);

// serve http request
const server = http.createServer(routeServiceProvider.app.expressApp);

// start http server
server.listen(config.ENV.PORT, () => { console.log(chalk.green.bold.italic(`app running on port ${config.ENV.PORT}`)); });

