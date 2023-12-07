import { useSinglePrismicDocument } from "@prismicio/react";
import { ProfileDocument } from "./types/perfil";
import { ContentItems } from "./types/general";


export function HandleDocument() {
    const [document] = useSinglePrismicDocument('hometree');

    if(!document?.data) return null

    const data: ProfileDocument = document?.data

    return {
        image: data.img_perfil?.url,
        instaName: data.body?.[0]?.primary.name_insta[0].text,
        links: data?.body?.[0]?.items?.map((element: ContentItems) => ({
            icon: element?.icon[0]?.text ?? '',
            nameButton: element?.name_button[0]?.text ?? '',
            link: element?.link[0]?.text ?? ''
        })),
    }
    
}