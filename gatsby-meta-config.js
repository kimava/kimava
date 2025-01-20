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
          'Optimised ad scheduling for a small e-commerce business, increasing ROAS by 11%p in two weeks. Analysed sales data by day and time to identify high-performing time slots, addressing budget inefficiencies and preventing early depletion of ad spend.',
        techStack: ['Google Sheets', 'Big Query', 'SQL', 'Looker Studio', 'Google Slides'],
        thumbnailUrl: 'ad-optimisation.png',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo:
            'https://drive.google.com/file/d/1vPrX6xzFITVv7IKOUx-Qc7NfuDKdOcyl/view?usp=drive_link',
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
