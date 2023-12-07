export interface ImgProps {
    url: string;
}

export interface ContentItems {
    icon: [
        {
            text: string;
        }
    ];
    link: [
        {
            text: string;
        }
    ];
    name_button: [
        {
            text: string;
        }
    ]
}

interface ContentPrimary {
    name_insta: [
        {
           text: string; 
        }
    ]; 
}

export interface ContentDocument {
    id: string;
    items: ContentItems[];
    primary: ContentPrimary;
}