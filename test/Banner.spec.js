import { describe, test, expect, mount } from '@vue/test-utils'
import Banner from '~/components/Banner.vue'

describe('Banner', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Banner)
    expect(wrapper.vm).toBeTruthy()
  })
})
