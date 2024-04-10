//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/1/routes.js')(router);
require('./routes/2/routes.js')(router);
require('./routes/3/routes.js')(router);
require('./routes/4/routes.js')(router);
require('./routes/5/routes.js')(router);
require('./routes/6/routes.js')(router);
require('./routes/7/routes.js')(router);
require('./routes/8/routes.js')(router);
require('./routes/9/routes.js')(router);
require('./routes/10/routes.js')(router);
require('./routes/11/routes.js')(router);
require('./routes/12/routes.js')(router);
require('./routes/13/routes.js')(router);
require('./routes/14/verification-report.js')(router);
require('./routes/14/pre-sentence-report.js')(router);
