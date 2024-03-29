import z from "zod";

export const cepSchema = z.object({
    cep: z.string().min(8, 'Cep deve conter exatamente 8 dígitos com apenas números'),
    rua: z.string().min(1, 'Esse campo é obrigatório'), 
    numero: z.string().min(1, 'Esse campo é obrigatório'), 
    bairro: z.string().min(1, 'Esse campo é obrigatório'), 
    cidade: z.string().min(1, 'Esse campo é obrigatório'), 
    estado: z.string().min(1, 'Esse campo é obrigatório'), 

})