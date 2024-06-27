
import Link from "next/link";



export default function Header() {
    return (
        <div className="grid grid-cols-12 w-8/12 mx-auto p-5 sticky snap-mandatory">
            <h1 className="font-black text-center text-blue-500" title="Online Graduating Student Clearance System">OGSCS</h1>
            <div className="col-span-10 mx-auto">

                <Link className="p-2 " href={'home'}> Home </Link>
                <Link className="p-2 " href={'home'}> About </Link>
                <Link className="p-2 " href={'home'}> Login </Link>
                <Link className="p-2 " href={'home'}> Register </Link>
                <Link className="p-2 " href={'home'}> Contact </Link>
            </div>
        </div>)
}