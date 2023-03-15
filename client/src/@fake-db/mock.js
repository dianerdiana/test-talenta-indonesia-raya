import MockAdapter from 'axios-mock-adapter'
import config from './config'

const mock = new MockAdapter(config)

export default mock
