import { create } from "zustand";

const store = (set) => ({
    newsletters: [
        {
            nlTitle: "Q-Bot Malware",
            nlText: "Q Bot is an info stealer trojan with ability to quickly spread to other hosts within an environment. It is distributed through phishing emails containing malicious documents, attachments, password protected archives and exploit kits.",
            nlLink: "https://www.instagram.com/p/CumTkBxB0f3/?igshid=MzRlODBiNWFlZA==",
            nlThumbnail: "./logo.svg"
        }
    ],
    addNewsletter: (nlTitle, nlText, nlLink, nlThumbnail) =>
        set(
            (store) => ({
                newsletters: [
                    ...store.newsletters,
                    {
                        nlTitle: nlTitle,
                        nlText: nlText,
                        nlLink: nlLink,
                        nlThumbnail: nlThumbnail
                    },
                ],
            }),
            false,
            "addNewsletter"
        )
})

export const useStore = create(store); 