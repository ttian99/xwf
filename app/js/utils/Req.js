import fetch from './Fetch';
const Req = {};

Req.searchSchool = (params, cb) => {
  console.log('------ req searchSchool --');
  params.cmd = 'search-school';
  fetch(params, (err, json) => {
    console.log('=============== fetchback -----------');
    console.log(JSON.stringify(json));
    cb(err, json);
  });
};


export default Req;
