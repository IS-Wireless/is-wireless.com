import { test } from '@vue/test-utils'
import Organisations from '~/components/Organisations.vue'

describe('Organisations', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Organisations)
    expect(wrapper.vm).toBeTruthy()
  })
})
