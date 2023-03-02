import {describe, expect, test} from "vitest";
import {shallowMount} from "@vue/test-utils";
import Button from "../Button";

// 测试分组
describe('Button', () => {
    // mount
    test('mount @vue/__tests__-utils', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            }
        })
        // 断言
        expect(wrapper.text()).toBe('Button')
    })

    describe('color', () => {
        test('default', () => {
            const wrapper = shallowMount(Button, {
                slots: {
                    default: 'Button'
                }
            })

            expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-500')).toBe(true)
        })

        test('red', () => {
            const wrapper = shallowMount(Button, {
                slots: {
                    default: 'Button'
                },

                props: {
                    color: 'red'
                }
            })

            expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-red-500')).toBe(true)
        })
    })

    describe('plain', () => {
        test('default', () => {
            const wrapper = shallowMount(Button, {
                slots: {
                    default: 'Button'
                }
            })
            expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-500')).toBe(true)
        })

        test('plain: true', () => {
            const wrapper = shallowMount(Button, {
                slots: {
                    default: 'Button'
                },
                props: {
                    plain: true
                }
            })

            expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-100')).toBe(true)
        })

        test('icon', () => {
            const wrapper = shallowMount(Button, {
                slots: {
                    default: 'Button'
                },
                props: {
                    icon: 'edit'
                }
            })

            expect(wrapper.find("i").classes().map(v => v.replace('\n','')).includes("i-ic-baseline-edit")).toBe(true);
        })
    })
})