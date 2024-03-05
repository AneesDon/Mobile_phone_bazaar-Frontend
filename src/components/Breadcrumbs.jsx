import React from 'react'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

function Breadcrumbs({list}) {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              <Home className="mr-4 h-4 w-4" />
              Home
            </Link>
          </li>

          {list
            ? list.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <span className="mx-2.5 text-gray-800">/</span>
                    <Link
                      to={item.to}
                      className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))
            : null}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs