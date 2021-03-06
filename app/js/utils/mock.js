const mock = {};

mock.school = [
  { name: '招商海月一期', price: 67500, year: '2005' },
  { name: '花果山小区', price: 45000, year: '1999' },
  { name: '桃园新居', price: 51000, year: '2010' },
  { name: '湾厦新村', price: 19999, year: '未知' },
];

// key=东海花园
mock.district = [
  { name: '育才三小', minScore: 76, year: '1985' },
  { name: '育才二中', minScore: 83, year: '2003' },
];

mock.degree = [
  { name: '招商海月一期', isLock: true },
];

mock.ridgepoleList = ['1栋', '2栋', '3栋', '4栋', '5栋', '6栋'];

mock.roomList = ['1号', '2号', '3号', '4号', '5号', '6号'];

mock.degreeResult = {
  pSchool: { name: '', year: '' },
  mSchool: { name: '', year: '' },
};

export default mock;
