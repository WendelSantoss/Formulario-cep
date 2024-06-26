export default function Input({id, label, type, register, error, handleblur}){
  
    return(
        <div className="flex flex-col">

            <label htmlFor={id}  className="text-white font-bold">{label} </label>

            
            <input 
            type={type} id={id} 
            className="border border-gray-300 rounded-md p-2"
            {...register(id)} onBlur={handleblur}></input>

            {error && <p className=" text-red-500 font-bold ">{error.message}</p>}
        

        </div>
    )
    
}