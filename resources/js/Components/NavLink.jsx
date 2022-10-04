import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children, as, method }) {
    return (
        <li className={active ? "bordered" : ""}>
            <Link href={href} as={as} method={method} className='capitalize'>
                {children}
            </Link>
        </li>
    );
}
