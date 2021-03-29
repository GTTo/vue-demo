import RomanCounterImproved from '@/components/RomanCounterImproved.vue'

describe('RomanCounterImproved.vue', () => {
  it('Counter value start at 0', () => {
    const defaultData = RomanCounterImproved.data();

    expect(defaultData.counter).toBe(0)
  })
})
