// import { app } from './app';

// const port = app.get('port');
// const server = (app as any).listen(port);
// // !code: init2 // !end

// // process.on('unhandledRejection', (reason, p) => {
// //   // !<DEFAULT> code: unhandled_rejection_log
// //   logger.error('Unhandled Rejection at: Promise ', p, reason);
// //   // !end
// //   // !code: unhandled_rejection // !end
// // });

// server.on('listening', async () => {
//   // !code: listening_log
//   //   logger.info(
//   //     'CaseOS application started on http://%s:%d',
//   //     app.get('host'),
//   //     port
//   //   );
//   // !end
//   // !code: listening // !end
//   // !code: listening1 // !end
// });

export * from "./local";
