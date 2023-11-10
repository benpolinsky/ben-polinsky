import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
    return rss({
        title: "Ben Polinsky DOT COM",
        description: "The home of Ben Polinsky DOT COM on the web.",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`
    })
}