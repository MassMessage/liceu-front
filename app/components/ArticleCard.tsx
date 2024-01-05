import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Tag } from "./Tag";
import { AuthorProfileInline } from "./AuthorProfileInline";

interface IArticleCard {
    name: string;
    title: string;
    src: string | StaticImport;
    photo: string | StaticImport;
    date: string;
    tag: string;
    href: string;
}

export const ArticleCard: FC<IArticleCard> = (props) => {
    return (
        <div className="p-4 rounded-md border border-solid w-[340px]">
            <div className="w-full relative mb-4">
                <Image src={props.src} alt='' />
            </div>
            <Tag>Política</Tag>
            <h2 className="font-semibold text-lg my-4 ">
                <Link href={props.href}>
                    {props.title}
                </Link>
            </h2>
            <AuthorProfileInline
                name={props.name}
                date={props.date}
                src={props.photo}
            />
        </div >
    )
}
