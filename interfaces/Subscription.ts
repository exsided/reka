import {IPicture} from '~/interfaces/Picture';

export interface ISubscription {
    id: number
    description: string
    subscribed: boolean
    preview: IPicture
}

export type SubscriptionProps = {
    description?: string
    subscribed?: boolean
}
