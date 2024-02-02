"use client"
import React, { FormEvent } from 'react'
import { Dancing_Script,Lobster_Two, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['300','400','500']})
import useForm from '@/other/hooks/cadastro-hook';

function Cadastro() {

const {values,handleChange,resetForm} = useForm({nome:"",celular:"",cpf:"",idade:0,estado:"",email:"",privacidade:false,promocoes:false})

const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Formulario Enviado:', values);
    resetForm(); // Clear the form after submission
  };

  return (
    <>
 
        
    
    <section className="bg-[#1D181E] overflow-hidden">
        <div className="row min-h-[400px] md:grid grid-cols-2 bg-[#1D181E]">
            <div className=" left-pannel min-h-[300px] flex align-center justify-center">
                <div className="panel max-w-1/2 flex  justify-center items-center ">
                    <div className="text-box flex flex-col ">
                        <button className="self-center md:self-start  bg-dcortes-primary px-5 py-2 rounded-lg uppercase text-2xl text-white tracking-wide">cadastre-se</button>
                        <h3 className="text-white font-bold mt-8 text-3xl uppercase tracking-wide">fique por dentro das <br/> <span className="text-dcortes-primary">novidades e promoções</span> </h3>
                    </div>
                </div>
            </div>

            
            <div className="right-pannel min-h-[300px] flex align-center justify-center ">
                <div className="panel   py-8 ">
                <form className="w-full max-w-lg mx-auto px-8 lg:px-0" onSubmit={handleSubmit}>
                    {/* NOME */}
                    <div className="flex flex-wrap -mx-3 mb-6 ">
                        <div className="w-full px-3">
                        <input 
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Nome"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                         name="celular"
                         value={values.celular}
                         onChange={handleChange}
                         required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="tel" placeholder="Celular"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input 
                         name="cpf"
                         value={values.cpf}
                         onChange={handleChange}
                         required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="CPF"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 my-4">
                        <input 
                         name="idade"
                         value={values.idade <= 0 ? '' : values.idade}
                         onChange={handleChange}
                         required
                         type='number'
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Idade"/>
                        </div>
                       

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
                        <div className="relative">
                            <select 
                            
                            name="estado"
                            value={values.estado}
                            onChange={handleChange}
                            required
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                            <option disabled defaultValue={"Estado"} value="">Estado</option>
                            <option value="maranhao">Maranhão</option>
                            <option value="piaui">Piauí</option>
                            <option value="sergipe">Sergipe</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                       
                        <input 
                         name="email"
                         value={values.email}
                         onChange={handleChange}
                         required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">

                        <label className="md:w-2/3 block text-white font-bold ">
                        <input
                         name="privacidade"
                         type="checkbox"
                         checked={values.privacidade}
                         onChange={handleChange}
                         required
                        className="mr-2 leading-tight  accent-dcortes-primary" />
                        <span style={poppins.style} className="text-sm font-[300] text-white ">
                            Li e aceita <span className="text-[#1D9CE4]">a politica de privacidade</span>
                        </span>
                        </label>
                        <label className="md:w-full block text-gray-800 font-bold">
                        <input  
                        name="promocoes"
                        type="checkbox"
                        checked={values.promocoes}
                        required
                        onChange={handleChange}
                        className="mr-2  leading-tight accent-dcortes-primary " />
                        <span style={poppins.style} className="text-sm text-white font-[300] ">
                        Autorizo o uso das minhas informações para receber e-mails, WhatsApp e SMS com novidades, lançamentos e promoções.
                        </span>
                        </label>
                        <div className="flex justify-center mt-8 ">
                         <button style={poppins.style} className="bg-[#333] mx-auto font-semibold tracking-wider hover:bg-[#3d3d3d80] text-white min-w-[80%] py-2 px-20 rounded-xl">Cadastrar</button>

                        </div>

                        </div>
                    </div>

                    
                    
                   

                </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cadastro