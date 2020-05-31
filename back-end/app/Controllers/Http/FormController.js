'use strict'

const FormInfo = use('App/Models/FormInfo')

class FormController {
    
    async formulario({ request }){
        const data = request.only(['name', 'email', 'cellphone'])

        const info = await  FormInfo.create(data)

        return info   
    }

    // async store ({request, response, session}) {
    //     const prospect = new prospect()

    //     prospect.name = request.input.('name')
    //     prospect.email = request.input.('email')
    //     prospect.cellphone = request.input.('cellphone')

    //     await prospect.save()

    //     return response.redirect('/formulario')
        

    // }
}

module.exports = FormController
