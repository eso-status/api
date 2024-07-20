import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketService {
  @WebSocketServer() server: Server;

  public getServer(): Server {
    return this.server;
  }
}
