const middleware = {}

middleware['after_auth'] = require('../middleware/after_auth.js')
middleware['after_auth'] = middleware['after_auth'].default || middleware['after_auth']

middleware['before_auth'] = require('../middleware/before_auth.js')
middleware['before_auth'] = middleware['before_auth'].default || middleware['before_auth']

middleware['before_set_goal'] = require('../middleware/before_set_goal.js')
middleware['before_set_goal'] = middleware['before_set_goal'].default || middleware['before_set_goal']

export default middleware
