import http from 'node:http';
import { Router } from 'livesey-routing';
import { PostgresClient } from 'livesey-database';


//import { router } from './infrastructure/routes/index.js';
import { setCorsHeaders } from './src/config/corsConfig.js';
import { port } from './src/config/envConfig.js';



// const appRouter = Router.use('/api', router);

(async () => {
  try {
    const server = http.createServer((req, res) => {
      setCorsHeaders(res);
      appRouter.handleRequest(req, res);
    });

    const dbClient = new PostgresClient();

    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Server initialization failed:', error.message);
  }
})();
