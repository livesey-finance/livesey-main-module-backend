# Livesey backend structure:
```sh
.
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── eslint.config.mjs
├── index.js
├── package-lock.json
├── package.json
├── src
│   ├── application
│   ├── config
│   │   ├── corsConfig.js
│   │   └── envConfig.js
│   ├── domain
│   │   ├── entities
│   │   │   ├── assetPrices.entity.d.ts
│   │   │   ├── assetPrices.entity.js
│   │   │   ├── currency.entity.d.ts
│   │   │   ├── currency.entity.js
│   │   │   ├── export const assetPricesSchema = {.js
│   │   │   ├── history.entity.d.ts
│   │   │   ├── history.entity.js
│   │   │   ├── mfa.entity.d.ts
│   │   │   ├── mfa.entity.js
│   │   │   ├── permission.entity.d.ts
│   │   │   ├── permission.entity.js
│   │   │   ├── portfolio.entity.d.ts
│   │   │   ├── portfolio.entity.js
│   │   │   ├── role.entity.d.ts
│   │   │   ├── role.entity.js
│   │   │   ├── session.entity.d.ts
│   │   │   ├── session.entity.js
│   │   │   ├── user.entity.d.ts
│   │   │   └── user.entity.js
│   │   ├── repositories
│   │   │   ├── assetPrices.repository.d.ts
│   │   │   ├── assetPrices.repository.js
│   │   │   ├── currency.repository.d.ts
│   │   │   ├── currency.repository.js
│   │   │   ├── history.repository.d.ts
│   │   │   ├── history.repository.js
│   │   │   ├── mfa.repository.d.ts
│   │   │   ├── mfa.repository.js
│   │   │   ├── permission.repository.d.ts
│   │   │   ├── permission.repository.js
│   │   │   ├── portfolio.repository.d.ts
│   │   │   ├── portfolio.repository.js
│   │   │   ├── role.repository.d.ts
│   │   │   ├── role.repository.js
│   │   │   ├── session.repository.d.ts
│   │   │   ├── session.repository.js
│   │   │   ├── user.repository.d.ts
│   │   │   └── user.repository.js
│   │   └── services
│   │       ├── assetPrices.service.js
│   │       ├── currency.service.js
│   │       ├── history.service.js
│   │       ├── mfa.service.js
│   │       ├── permission.service.js
│   │       ├── portfolio.service.js
│   │       ├── role.service.js
│   │       ├── session.service.js
│   │       └── user.service.js
│   └── infrastructure
│       ├── db
│       │   ├── config
│       │   │   └── dbConfig.js
│       │   └── schemas
│       │       ├── assetPrices.schema.js
│       │       ├── currency.schema.js
│       │       ├── history.schema.js
│       │       ├── mfa.schema.js
│       │       ├── permission.schema.js
│       │       ├── portfolio.schema.js
│       │       ├── role.schema.js
│       │       ├── session.schema.js
│       │       └── user.schema.js
│       ├── external-services
│       ├── repositories
│       └── utils
├── structure.md
└── tests

16 directories, 67 files
```