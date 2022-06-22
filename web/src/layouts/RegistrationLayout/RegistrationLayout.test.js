import { render } from '@redwoodjs/testing/web'

import RegistrationLayout from './RegistrationLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RegistrationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegistrationLayout />)
    }).not.toThrow()
  })
})
