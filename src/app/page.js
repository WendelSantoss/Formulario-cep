"use client"
import Input from "@/componentes/input";
import {cepSchema} from '@/componentes/zod'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from "react";


export default function Home() {
  const [erro, setErro]= useState('')

  const {
     register, 
     handleSubmit, 
     getValues, 
     setValue, 
     formState: { errors },
  } = useForm({
      resolver: zodResolver(cepSchema),
    });
  
  const onSubmit= (data)=>{
    console.log(data)
  }  

  const handleBlur= ()=>{
    
      fetch(`https://viacep.com.br/ws/${getValues('cep')}/json/`)
      .then(response=> response.json())
      .then((data) =>{
        if(data.erro == true){
          return setErro('CEP não encontrado.')
        }
        setErro('')
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)
      })
      .catch((error)=>{
        console.log(error)
        setErro('CEP não encontrado.')
      } );
    
  }

  return (

    <div className="flex min-h-screen flex-col items-center
    justify-between p-24 bg-black">
      
        
      <h1 className="text-3xl text-white font-bold">Formulário de endereço</h1>
      
      <form className="flex flex-col py-4 w-1/3 space-y-4" onSubmit={handleSubmit(onSubmit)}>
     
        <Input id="cep" type="text" label="CEP" register={register} error={errors.cep} handleblur={handleBlur}/>
        {erro && <h3 className=" text-red-500 font-bold ">{erro}</h3>}
        <Input id="rua" type="text" label="RUA" register={register} error={errors.rua}/>
        <Input id="numero" type="text" label="Nº" register={register} error={errors.numero}/>
        <Input id="bairro" type="text" label="BAIRRO" register={register} error={errors.bairro}/>
        <Input id="cidade" type="text" label="CIDADE" register={register} error={errors.cidade}/>
        <Input id="estado" type="text" label="ESTADO" register={register} error={errors.estado}/>
        <button className="bg-blue-500 text-white font-bold rounded-md p-2" type="submit">Salvar</button>

      </form>
    </div>
  );
}
