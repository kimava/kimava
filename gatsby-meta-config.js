module.exports = {
  title: `soyeon.kim`,
  description: `Data insights, analysis, and everything in between`,
  language: `en`,
  siteUrl: `https://kimava.vercel.app`,
  ogImage: `/og-image.png`,
  ga: '0', // GA Tracking ID
  author: {
    name: `Soyeon Kim`,
    bio: {
      role: `business data analyst`,
      description: ['proactive', 'adaptive', 'growing'],
    },
    social: {
      github: `https://github.com/kimava`,
      linkedIn: `https://www.linkedin.com/in/ava-soyeon-kim`,
      email: `ava.soyeon.kim@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          other: '',
          appStore: '',
          demo: '',
        },
      },
    ],

    projects: [
      {
        title: '',
        description: '',
        techStack: [''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          other: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'Optimising Ad Efficiency for a E-commerce Store',
        description:
          'Improved ad efficiency for an e-commerce store through data analysis focusing on ROAS, CVR, and CTR.',
        techStack: ['Real-world', 'Google Sheets', 'Pivot Table', 'Google Slides'],
        thumbnailUrl: 'ad-optimisation.png',
        links: {
          post: '',
          github: 'https://github.com/kimava/optimising-ad-efficiency',
          googlePlay: '',
          other:
            'https://docs.google.com/spreadsheets/d/1zor9ynbt4_noheE0Bk1x7NtVN20fKcrt9W0Lu1rZyXs/edit?usp=sharing',
          appStore: '',
          demo:
            'https://docs.google.com/presentation/d/1Akokt-3jYZc6cEKbmNRz8rzTG-O0-99_Wiobp8jx2tA/edit?usp=sharing',
        },
      },
      {
        title: 'Visualising the Distance Between Bins and Littering',
        description:
          'It explores the spatial relationship between rubbish bins and littering locations through mapping and statistical summaries.',
        techStack: [
          'Personal project',
          'MySQL',
          'Python',
          'Pandas',
          'Matplotlib',
          'Folium',
          'Geopy',
        ],
        thumbnailUrl: 'garbage-bin.png',
        links: {
          post: '',
          github: 'https://github.com/kimava/littering_and_bins',
          googlePlay: '',
          other: '',
          appStore: '',
          demo:
            'https://inky-trunk-6f7.notion.site/Do-Garbage-Bins-Reduce-Illegal-Littering-15304b8816d980c68cd6fbcd2688c53a',
        },
      },
    ],
  },
};
