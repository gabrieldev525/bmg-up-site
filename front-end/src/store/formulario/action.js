import { requests } from '../utils'

import { FORM_LEADS } from './type'

export const FormLeads = (data) => {
  return requests.post('/formulario', data, {}, FORM_LEADS)
}