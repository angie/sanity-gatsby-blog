export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60cb0ea2e4e036a537137e54",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4u7jigwd",
                  apiId: "f5c7b75b-fbc6-475e-9410-a7f984abd6a7",
                },
                {
                  buildHookId: "60cb0ea3bcbe67a729aedf9c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gg7ni8yy",
                  apiId: "40b00cf1-2e12-4013-b6d3-7f4d6e43d8a8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/angie/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gg7ni8yy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
