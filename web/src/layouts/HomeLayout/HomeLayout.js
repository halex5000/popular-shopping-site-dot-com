import { Container } from '@mui/material'

const HomeLayout = ({ children }) => {
  return (
    <>
      <Container>
        <header>
          <h1 className="header">Popular Shopping Site Dot Com</h1>
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
