import { withLDProvider } from 'launchdarkly-react-client-sdk'

const RegistrationLayout = ({ children }) => {
  return <>{children}</>
}

export default withLDProvider({
  clientSideID: '62acb4750615bf1497433395',
  user: {
    key: 'anonymous',
    name: 'A Nonny Mouse',
    email: 'anonymous@example.com',
  },
})(RegistrationLayout)
