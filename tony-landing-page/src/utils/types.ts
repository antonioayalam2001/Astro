export interface Technology {
    id: string;
    name: string;
    icon: {
        src: string;
        width: number;
        height: number;
        format: string;
    };
    style: string;
}

export type Icon = {
    src: string;
    width: number;
    height: number;
    format: string;
}

export interface Project {
    id: string,
    name: string
    img: Icon,
    link: string
    desc: string
    icons: Icon[],
    gitUrl: string
}