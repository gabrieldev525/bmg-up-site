'use strict'

const FormInfo = use('App/Models/FormInfo')

class FormController {
    
    async formulario({ request }){
        const data = request.only(['name', 'email', 'cellphone'])

        const info = await  FormInfo.create(data)

        return info
        
    }

}

module.exports = FormController
