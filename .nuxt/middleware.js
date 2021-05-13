const middleware = {}

middleware['after_auth'] = require('../middleware/after_auth.js')
middleware['after_auth'] = middleware['after_auth'].default || middleware['after_auth']

middleware['before_auth'] = require('../middleware/before_auth.js')
middleware['before_auth'] = middleware['before_auth'].default || middleware['before_auth']

middleware['before_set_want'] = require('../middleware/before_set_want.js')
middleware['before_set_want'] = middleware['before_set_want'].default || middleware['before_set_want']

export default middleware
