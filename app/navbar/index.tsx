const Navbar=()=>{
    return(
        <div className="flex gap-48">
        <p className="text-yellow-500 italic">Food House</p>
        <a className="text-amber-400 ml-40 mt-6">Home</a>
        <a className="mt-6">Restaurant</a>
        <a className="mt-6">Service</a>
        <a className="mt-6">Cart</a>
        <a className="mt-6 ml-24">SignIn</a>
      </div>
    )
}


export default Navbar;