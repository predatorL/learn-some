import {createReq} from '@/utils'

const baseUrl = '/assets/'
const services = {
    get: 'list'
}

export default createReq(services, baseUrl)
