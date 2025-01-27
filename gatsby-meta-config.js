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
      role: `data analyst/engineer,`,
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
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'Optimising Ad Efficiency',
        description:
          'Improved ad efficiency for an e-commerce store through data analysis focusing on ROAS, CVR, and CTR.',
        techStack: ['Google Sheets', 'Google Slides'],
        thumbnailUrl: 'ad-optimisation.png',
        links: {
          post: '',
          github: 'https://github.com/kimava/optimising-ad-efficiency',
          googlePlay: '',
          appStore: '',
          demo:
            'https://docs.google.com/presentation/d/1Akokt-3jYZc6cEKbmNRz8rzTG-O0-99_Wiobp8jx2tA/edit?usp=sharing',
        },
      },
      {
        title: 'Do Garbage Bins Reduce Illegal Littering?',
        description:
          'Investigate whether the availability of garbage bins influences the occurrence of illegal littering.',
        techStack: ['MySQL', 'Python', 'Pandas', 'Matplotlib', 'Folium', 'Geopy'],
        thumbnailUrl: 'garbage-bin.png',
        links: {
          post: '',
          github: 'https://github.com/kimava/littering_and_bins',
          googlePlay: '',
          appStore: '',
          demo:
            'https://inky-trunk-6f7.notion.site/Do-Garbage-Bins-Reduce-Illegal-Littering-15304b8816d980c68cd6fbcd2688c53a',
        },
      },
    ],
  },
};
