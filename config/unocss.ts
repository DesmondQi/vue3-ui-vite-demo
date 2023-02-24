import unocss from "unocss/vite";
import {presetAttributify, presetIcons, presetUno} from "unocss";

const colors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink'
]

const icons = [
    'search',
    'edit',
    'check',
    'message',
    'star-off',
    'delete',
    'add',
    'share'
]

const size = [
    {
        x: 2,
        y: 1,
        text: 'sm'
    },
    {
        x: 3,
        y: 1.5,
        text: 'base'
    },
    {
        x: 4,
        y: 2,
        text: 'lg'
    }
]

const safelist = [
    ...colors.map(value => `bg-${value}-500`),
    ...colors.map(value => `bg-${value}-100`),
    ...colors.map(value => `hover:bg-${value}-400`),
    ...colors.map(value => `border-${value}-500`),
    ...colors.map(value => `text-${value}-500`),
    ...size.map(({x}) => `px-${x}`),
    ...size.map(({y}) => `py-${y}`),
    ...size.map(({text}) => `text-${text}`),
    ...icons.map(value => `i-ic-baseline-${value}`),
    'rounded-full', 'rounded-lg', 'text-white'
]

export default () => unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()]
})
