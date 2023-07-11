export type EventItemType = {
    id: string,
    title: string,
    description: string,
    location: string,
    date: string,
    image: string,
    isFeatured: boolean
}

export type NavigationMenuType = NavigationMenuItemType[];

export type NavigationMenuItemType = {
    label: string,
    link: string,
    newWindow?: boolean    
}