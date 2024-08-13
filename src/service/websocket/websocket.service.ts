import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { config } from 'dotenv';
import { Server } from 'socket.io';

config();

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  secure: true,
  transports: ['websocket'],
})
@Injectable()
export class WebsocketService {
  @WebSocketServer() server: Server;

  @Interval(Number(process.env.PING_INTERVAL))
  public ping(): void {
    this.server.emit('ping');
  }
}
