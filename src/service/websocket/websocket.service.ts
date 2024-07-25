import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { config } from 'dotenv';
import { Server } from 'socket.io';

config();

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  secure: process.env.APP_PROTOCOL === 'https',
  transports: ['websocket'],
})
export class WebsocketService {
  @WebSocketServer() server: Server;

  public getServer(): Server {
    return this.server;
  }
}
