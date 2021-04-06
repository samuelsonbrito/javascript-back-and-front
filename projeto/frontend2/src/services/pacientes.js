import { http } from './config'

export default {

    salvar: (paciente) => {
        return http.post('paciente', paciente)
    },

    listar: () => {
        return http.get('paciente')
    },

    atualizar: (paciente) => {
        return http.put(`paciente/${paciente.id}`, paciente)
    },

    remover: (paciente) => {
        return http.delete(`paciente/${paciente.id}`)
    }


}