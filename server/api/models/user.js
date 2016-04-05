var schema = {
  modelName: 'users',
  nRecords: 10,
  attributes: {
    firstName: {
        type: 'string',
        faker: 'name.firstName'
      },
      lastName: {
        type: 'string',
        faker: 'name.lastName'
      },
      // email: {
      //   type: 'string',
      //   faker: 'internet.email'
      // },
      // company: {
      //   type: 'string',
      //   faker: 'company.companyName'
      // },
      // country: {
      //   type: 'string',
      //   faker: 'address.country'
      // },
      // profileImage: {
      //   type: 'object',
      //   faker: 'image.avatar'
      // }
  }

};

module.exports = schema;
