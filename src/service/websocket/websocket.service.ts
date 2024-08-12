import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  secure: true,
  transports: ['websocket'],
})
@Injectable()
export class WebsocketService implements OnModuleDestroy {
  @WebSocketServer() server: Server;

  onModuleDestroy(): void {
    this.server.close();
  }
}
