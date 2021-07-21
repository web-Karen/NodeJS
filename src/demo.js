// 读取系统的cpu信息
const { Server } = require('http');
const os = require('os');

// const cpus = os.cpus();//获取当前系统的cpu数量
// console.log(cpus);
// [
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 7112765,
//       nice: 0,
//       sys: 5806656,
//       idle: 423219593,
//       irq: 457390
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 11001484,
//       nice: 0,
//       sys: 7701640,
//       idle: 417435890,
//       irq: 45921
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 9693796,
//       nice: 0,
//       sys: 5626843,
//       idle: 420818140,
//       irq: 36609
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 7744562,
//       nice: 0,
//       sys: 4750578,
//       idle: 423643640,
//       irq: 33640
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 8575734,
//       nice: 0,
//       sys: 4450500,
//       idle: 423112546,
//       irq: 33453
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 9566984,
//       nice: 0,
//       sys: 6733531,
//       idle: 419838265,
//       irq: 33890
//     }
//   }
// ]

// 获取内存信息
// const total = os.totalmem();//bytes
// console.log(total/1024/1024/1024);//GB
// const free = os.freemem();
// console.log(free/1024/1024/1024);//当前剩余内存

