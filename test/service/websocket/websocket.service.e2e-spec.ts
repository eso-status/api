import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { TypeOrmModule } from '@nestjs/typeorm';
import { io, Socket } from 'socket.io-client';

import { dataSourceOptions } from '../../../src/config/typeorm.config';
import { WebsocketService } from '../../../src/service/websocket/websocket.service';

describe('WebsocketService (e2e)', () => {
  let app: INestApplication;
  let clientSocket: Socket;
  let websocketService: WebsocketService;

  beforeAll(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(dataSourceOptions)],
      providers: [WebsocketService],
    }).compile();

    app = module.createNestApplication();
    websocketService = app.get<WebsocketService>(WebsocketService);

    clientSocket = io(`ws://${process.env.APP_HOST}:${process.env.APP_PORT}`, {
      secure: true,
      rejectUnauthorized: false,
      transports: ['websocket'],
    });

    await app.listen(process.env.APP_PORT);

    await new Promise<void>((resolve): void => {
      clientSocket.on('connect', (): void => {
        resolve();
      });
    });
  }, 15000);

  afterAll(async (): Promise<void> => {
    await app.close();
    clientSocket.disconnect();
  }, 15000);

  it('should ping event received', async (): Promise<void> => {
    await new Promise<void>(resolve => {
      clientSocket.on('ping', resolve);

      websocketService.ping();
    });

    expect(true).toEqual(true);
  }, 15000);
});
