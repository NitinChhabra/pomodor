import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { NoData } from '../NoData'

describe('<SkipButton />', () => {
  let shallow
  let wrapper

  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(<NoData />)
  })

  test('should render <NoData /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
