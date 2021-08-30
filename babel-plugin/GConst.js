import * as a from './test1'
import * as b from './test2'

let mergeOptions = {}
Object.assign(mergeOptions, a)
Object.assign(mergeOptions, b)

export default mergeOptions
