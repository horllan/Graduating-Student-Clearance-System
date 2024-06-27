import Link from "next/link"

export default function Footer() {
    return <div className="bg-slate-900 text-red-50 px-24 pt-24 pb-3 grid grid-cols-3 text-sm font-medium">
        <div id="info">
            <h2>OGSCS</h2>
        </div>
        <div id="useful_link">
            <ul>

                <li>
                    <Link href={"about"}>About</Link>
                </li>
                <li>
                    <Link href={"about"}>Help</Link>
                </li>
                <li>
                    <Link href={"about"}>News Updates</Link>
                </li>
                <li>
                    <Link href={"about"}>Generate Clearance Status</Link>
                </li>
            </ul>
        </div>
        <div className="copyright col-span-3 text-xs">
            <hr className="mt-10 mb-2 border-slate-300 opacity-70"/>
            <p>&copy; copyright {new Date().getFullYear()}</p>
        </div>
    </div >
}