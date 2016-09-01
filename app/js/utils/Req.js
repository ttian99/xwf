import fetch from './Fetch';
const Req = {};

Req.searchSchool = (params, cb) => {
  console.log('------ req searchSchool --');
  params.cmd = 'search-school';
  fetch(params, (err, json) => {
    cb(err, json);
  });
};

Req.searchVillage = (params, cb) => {
  console.log('------ req searchVillage --');
  params.cmd = 'search-village';
  fetch(params, (err, json) => {
    cb(err, json);
  });
};

Req.checkKey = (params, cb) => {
  console.log('------ req checkKey --');
  params.cmd = 'check-key';
  fetch(params, (err, json) => {
    cb(err, json);
  });
};

Req.selRidgepole = (params, cb) => {
  console.log('------ req ridgepole --');
  params.cmd = 'select-ridgepole';
  fetch(params, (err, json) => {
    cb(err, json);
  });
};

export default Req;
