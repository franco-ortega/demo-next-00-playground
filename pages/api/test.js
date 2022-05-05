// Arrow function:
// const test = (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.statusCode = 200;
//   res.end(JSON.stringify({
//     test: 'This is an API route test (arrow function version).'
//   }));
// };

// export default test;


// Regular function:
// export default function test (req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.statusCode = 200;
//   res.end(JSON.stringify({
//     test: 'This is an API route test (regular function version).'
//   }));
// };

//Short NEXT way:
export default function test (req, res) {
  res.status(200).json({
    test: 'This is an API route test (short version).'
  });
};
