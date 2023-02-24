import {defineComponent, h, PropType} from "vue";
import 'uno.css'

export type IColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = 'small' | 'medium' | 'large'
export default defineComponent({
    name: 'SButton',

    props: {
        color: {
            type: String as PropType<IColor>,
            default: 'blue'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        size: {
            type: String as PropType<ISize>,
            default: 'medium'
        },
        icon: String
    },

    setup(props, {slots}) {
        const size: Record<ISize, { x: number, y: number, text: string }> = {
            small: {
                x: 2,
                y: 1,
                text: 'sm'
            },
            medium: {
                x: 3,
                y: 1.5,
                text: 'base'
            },
            large: {
                x: 4,
                y: 2,
                text: 'lg'
            }
        }
        return () => <button class={[
            `px-${size[props.size].x}`,
            `py-${size[props.size].y}`,
            `rounded-${props.round ? 'full' : 'lg'}`,
            `bg-${props.color}-${props.plain ? 100 : 500}`,
            `hover:bg-${props.color}-400`,
            `border-${props.color}-500`,
            `text-${props.plain ? props.color + '-500' : 'white'}`,
            `text-${size[props.size].text}`,
            'hover:text-white',
            'font-semibold',
            'shadow-md',
            'border-solid',
            'cursor-pointer',
            'transition',
            'duration-300',
            'ease-in-out',
            'transform',
            'hover:scale-105',
            'mx-1'
        ]}>
            {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : '' }
            {slots.default ? slots.default() : ''}
        </button>
    }
})
