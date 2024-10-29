import {IPicture} from '~/server/interfaces/Picture';

export interface ISubscriptions {
    id: number
    description: string
    subscribed: boolean
    preview: IPicture
}
