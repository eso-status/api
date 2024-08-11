import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  secure: true,
  transports: ['websocket'],
  pingInterval: 1,
  pingTimeout: 360000,
  upgradeTimeout: 1,
  connectTimeout: 360000,
  connectionStateRecovery: {
    maxDisconnectionDuration: 360000,
  },
})
export class WebsocketService {
  @WebSocketServer() server: Server;
}
