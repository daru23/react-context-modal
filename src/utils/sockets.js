import openSocket from 'socket.io-client';
import {getSettings} from '../../getSettings';

export const createSocket = () => {
    return new Promise((resolve, reject) => {
        getSettings().then((settings) => {
            let socket = openSocket(settings.server);
            socket.on('connect', () => {
                let id = socket.id;
                resolve({socket: socket, id: id});
            });
        }).catch((err) => {reject(err);});
    });
};
