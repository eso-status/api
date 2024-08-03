[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=eso-status_api)](https://sonarcloud.io/summary/new_code?id=eso-status_api)

[![Build Status](https://github.com/dov118/fitness/workflows/CI/badge.svg)](https://github.com/dov118/fitness/actions/workflows/CI.yaml)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=bugs)](https://sonarcloud.io/summary/new_code?id=eso-status_api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=eso-status_api)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=eso-status_api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eso-status_api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=coverage)](https://sonarcloud.io/summary/new_code?id=eso-status_api)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=eso-status_api&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=eso-status_api)

eso-status/api is an API to get The elder scrolls online server and service status

## Table of Contents
- [How to use it ?](#how-to-use-it-)
- [Returned data format](#returned-data-format-)

### How to use it ?
Use @eso-status/connector
[@eso-status/connector](https://github.com/eso-status/connector/releases/tag/2.0.0)

### eso-status/connector
[![npm](https://img.shields.io/npm/v/@eso-status/connector)](https://www.npmjs.com/package/@eso-status/connector)
[![license](https://img.shields.io/npm/l/@eso-status/connector)](https://github.com/eso-status/connector/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/connector" alt="Downloads" />
<img src="https://img.shields.io/node/v/@eso-status/connector" alt="Node version" />
[![Build Status](https://github.com/eso-status/connector/workflows/CI/badge.svg)](https://github.com/eso-status/connector/actions/workflows/CI.yaml)
[![Delivery Status](https://github.com/eso-status/connector/workflows/CD/badge.svg)](https://github.com/eso-status/connector/actions/workflows/CD.yaml)

### Listen api socket
```typescript
import { EsoStatusConnector } from '@eso-status/connector';
import { EsoStatus } from '@eso-status/types';

EsoStatusConnector
  .listen()
  .on('update', (esoService: EsoStatus): void => { ... });
```

### Get status for specific slug
```typescript
import { EsoStatusConnector } from '@eso-status/connector';
import { EsoStatus } from '@eso-status/types';

EsoStatusConnector
  .get('server_ps_eu')
  .then((esoService: EsoStatus): void => { ... })
  .catch((error: Error): void => { ... });
```

### Get status for multi slugs
```typescript
import { EsoStatusConnector } from '@eso-status/connector';
import { EsoStatus } from '@eso-status/types';

EsoStatusConnector
  .get(['server_ps_eu', 'server_ps_na'])
  .then((esoServices: EsoStatus[]): void => { ... })
  .catch((error: Error): void => { ... });
```

### Get status for all slugs
```typescript
import { EsoStatusConnector } from '@eso-status/connector';
import { EsoStatus } from '@eso-status/types';

EsoStatusConnector
  .get()
  .then((esoServices: EsoStatus[]): void => { ... })
  .catch((error: Error): void => { ... });
```

[see more...](https://github.com/eso-status/connector/blob/refs/tags/2.0.0/README.md)

