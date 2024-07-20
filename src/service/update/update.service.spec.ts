import { Test, TestingModule } from '@nestjs/testing';
import { UpdateService } from './update.service';
import { config } from 'dotenv';
import { WebsocketService } from '../websocket/websocket.service';
import { WinstonService } from '../winston/winston.service';
import { ServiceService } from '../../resource/service/service.service';
import { StatusService } from '../../resource/status/status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../config/typeorm.config';
import { Service } from '../../resource/service/entities/service.entity';
import { Status } from '../../resource/status/entities/status.entity';

config();

describe('UpdateService', () => {
  let service: UpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Service, Status]),
      ],
      providers: [
        UpdateService,
        WebsocketService,
        WinstonService,
        ServiceService,
        StatusService,
      ],
    }).compile();

    service = module.get<UpdateService>(UpdateService);
  });

  it('should getQueue return correct data', async () => {
    const queue = [];
    queue['service_store_eso'] = {
      slug: 'service_store_eso',
      status: 'up',
      type: 'service',
      support: 'store',
      zone: 'eso',
      raw: {
        sources: [
          'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320',
        ],
        raw: [
          ' />\n<p>2024.07.01 - 12:00 UTC (08:00 EDT)</p>\n\n<p>The North American megaservers are currently available.</p>\n\n<p>The ESO store and account system are currently available.</p>\n\n',
        ],
        rawDate: ' />2024.07.01 - 12:00 UTC (08:00 EDT)',
        rawData: 'The ESO store and account system are currently available.',
        slugs: ['service_store_eso'],
        dates: ['2024-08-01T12:00:00.000Z'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
      },
    };

    jest.spyOn(service, 'getQueue').mockImplementation(() => queue);

    expect(service.getQueue()).toEqual(queue);
  });
});
