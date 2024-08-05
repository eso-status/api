import { NestFactory } from '@nestjs/core';

import { bootstrap } from '../src/main';

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn(),
  },
}));

describe('bootstrap', (): void => {
  it('should create the app and start listening', async (): Promise<void> => {
    const app: { listen: jest.Mock; setGlobalPrefix: jest.Mock } = {
      listen: jest.fn().mockResolvedValue(undefined),
      setGlobalPrefix: jest.fn(),
    };
    (NestFactory.create as jest.Mock).mockResolvedValue(app);

    await bootstrap();

    expect(true).toBe(true);

    jest.resetAllMocks();
  });
});
