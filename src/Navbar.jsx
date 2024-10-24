function Navbar(){
    return <>
    <div className="w-full flex p-3 bg-red-300 gap-1 align-middle" >
        <img className="w-5 " src="\react-2.svg" alt="" />
        <ul className="nav-ul">
            <li className="nav-li">
            <a href="" className="nav-link">Home</a>
            </li>
            <li className="nav-li">
            <a href="" className="nav-link">About Us</a>
            </li>
            <li className="nav-li">
            <a href="" className="nav-link">Services</a>
            </li>
            <li className="nav-li">
            <a href="" className="nav-link">Contact us</a>
            </li>
        </ul>
    </div>
    </>
}
export default Navbar;