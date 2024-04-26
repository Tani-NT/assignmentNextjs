export default function Form(){
    return(
        <div className="w-full h-[100vh] flex items-center justify-center ">
            <form className="bg-zinc-800 text-white rounded-md p-5">
                <h1 className="text-[3vw]">Get Connected With Us</h1>
                <hr/>
                <label className='px-2 py-3'>Name:-</label>
                <input className="my-3 rounded-md" type="text" placeholder="Type Your Name.."/>
                <br/>
                <label className='px-2 py-3'>Email:-</label>
                <input className="my-3 rounded-md" type="email" placeholder="Type Your Email.."/>
                <br/>
                <button className="px-5 py-2 ml-[150px] mt-2 rounded-md bg-blue-700">Submit</button>
            </form>
        </div>
    )
}