import { Container } from '@mui/material'

import { useAuth } from '@redwoodjs/auth'
import { routes, Link } from '@redwoodjs/router'

const HomeLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Container>
        <header>
          <div className="flex-between">
            <h1 className="header">Popular Shopping Site Dot Com</h1>
            {isAuthenticated ? (
              <div>
                <span>Logged in as {currentUser.email}</span>{' '}
                <button type="button" onClick={logOut}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </div>
          <nav>
            <ul>
              <li>{/* <p>something</p> */}</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default HomeLayout
