import { UserIcon } from "@sanity/icons";

export default {
    name: "profile",
    title: "Profile",
    type: "document",
    icon: UserIcon,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "slug",
            type: "string",
        },
        {
            title: "Copy",
            name: "copy",
            type: "text",
        },
        {
            name: "instagram",
            title: "Instagram",
            type: "string",
        },
        {
            name: "twitter",
            title: "Twitter",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: { title: "name", media: "image" },
    },
};
