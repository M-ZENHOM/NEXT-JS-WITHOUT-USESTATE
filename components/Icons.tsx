import { FaJs, FaRegStar } from 'react-icons/fa6'

export const Icons = {
    JS: () => <FaJs />,
    Star: () => <FaRegStar />
}


export type Icons = keyof typeof Icons      