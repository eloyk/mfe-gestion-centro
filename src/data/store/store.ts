import { makeStore } from './makeStore'
import reducers from './reducers'

const store = makeStore(reducers)

export default store