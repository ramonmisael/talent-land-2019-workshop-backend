const resumeService = require('../utils/resumeService');

module.exports = [
  {
    method: 'GET',
    route: '/resume',
    handler: (req, res) => {
        resumeService.getResume().then(data => {
            res.status(200).send(data);
        });
    },
  },
];
