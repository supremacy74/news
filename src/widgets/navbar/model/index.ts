// Интерфейсы

import { createEvent, createStore } from 'effector'

export interface IIcon {
    src: string
    alt: string
}

export interface IItem {
    id: number
    name: string
    href: string
    icons: Array<IIcon>
}

export interface IBody {
    items: Array<IItem>
}

// Состояния

const body: IBody = {
    items: [
        {
            id: 0,
            name: 'Лента',
            href: '/',
            icons: [
                {
                    src: 'lighting',
                    alt: ''
                },
                {
                    src: 'selected-lighting',
                    alt: ''
                }
            ]
        },
        {
            id: 1,
            name: 'Происшествия',
            href: '/incidents',
            icons: [
                {
                    src: 'explosion',
                    alt: ''
                },
                {
                    src: 'selected-explosion',
                    alt: ''
                }
            ]
        },
        {
            id: 2,
            name: 'Авто',
            href: '/auto',
            icons: [
                {
                    src: 'car',
                    alt: ''
                },
                {
                    src: 'selected-car',
                    alt: ''
                }
            ]
        },
        {
            id: 3,
            name: 'Бизнес',
            href: '/business',
            icons: [
                {
                    src: 'briefcase',
                    alt: ''
                },
                {
                    src: 'selected-briefcase',
                    alt: ''
                }
            ]
        },
        {
            id: 4,
            name: 'Здоровье',
            href: '/health',
            icons: [
                {
                    src: 'medicine',
                    alt: ''
                },
                {
                    src: 'selected-medicine',
                    alt: ''
                }
            ]
        },
        {
            id: 5,
            name: 'Крипто',
            href: '/crypto',
            icons: [
                {
                    src: 'bitcoin',
                    alt: ''
                },
                {
                    src: 'selected-bitcoin',
                    alt: ''
                }
            ]
        },
        {
            id: 6,
            name: 'Недвижимость',
            href: '/estate',
            icons: [
                {
                    src: 'house',
                    alt: ''
                },
                {
                    src: 'selected-house',
                    alt: ''
                }
            ]
        },
        {
            id: 7,
            name: 'Образование',
            href: '/education',
            icons: [
                {
                    src: 'book',
                    alt: ''
                },
                {
                    src: 'selected-book',
                    alt: ''
                }
            ]
        },
        {
            id: 8,
            name: 'Политика',
            href: '/politics',
            icons: [
                {
                    src: 'politics',
                    alt: ''
                },
                {
                    src: 'selected-politics',
                    alt: ''
                }
            ]
        },
        {
            id: 9,
            name: 'Туризм',
            href: '/tourism',
            icons: [
                {
                    src: 'tent',
                    alt: ''
                },
                {
                    src: 'selected-tent',
                    alt: ''
                }
            ]
        },
        {
            id: 10,
            name: 'Шоу-бизнес',
            href: '/showbiz',
            icons: [
                {
                    src: 'star',
                    alt: ''
                },
                {
                    src: 'selected-star',
                    alt: ''
                }
            ]
        },
        {
            id: 11,
            name: 'Спорт',
            href: '/sport',
            icons: [
                {
                    src: 'ball',
                    alt: ''
                },
                {
                    src: 'selected-ball',
                    alt: ''
                }
            ]
        },
        {
            id: 12,
            name: 'Стиль',
            href: '/style',
            icons: [
                {
                    src: 'dress',
                    alt: ''
                },
                {
                    src: 'selected-dress',
                    alt: ''
                }
            ]
        },
        {
            id: 13,
            name: 'Наука и технологии',
            href: '/science',
            icons: [
                {
                    src: 'laptop',
                    alt: ''
                },
                {
                    src: 'selected-laptop',
                    alt: ''
                }
            ]
        },
        {
            id: 14,
            name: 'Экономика',
            href: '/economics',
            icons: [
                {
                    src: 'chart',
                    alt: ''
                },
                {
                    src: 'selected-chart',
                    alt: ''
                }
            ]
        }
    ]
}

export const $body = createStore<IBody>(body)

export const $isHidden = createStore<boolean>(true)

export const setIsHidden = createEvent<boolean>()

$isHidden.on(setIsHidden, (_, payload) => payload)
