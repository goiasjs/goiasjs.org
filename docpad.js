module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "GO JS",
      description: "Grupos de Usuários Javascript de Goiás",
      // date: "November 15",
      // If your event is free, just comment this line
      // price: "$100",
      // venue: "Coco Bongo",
      // address: "Boulevard Kukulcan, 30",
      // city: "Cancún",
      state: "Goiás"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Register now!",
    //     link: "http://eventick.com.br"
    // },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/goiasjs/goiasjs.org"
    },

    // Site info
    site: {
      theme: "gojs.org",
      url: "http://gojs.org",
      googleanalytics: "UA-44629992-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      // 'location',
      // 'speakers',
      // 'schedule',
      // 'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Quem somos",
      // location: "Location",
      // speakers: "Speakers",
      // schedule: "Schedule",
      // sponsors: "Sponsors",
      partners: "Parceiros",
      // contact: "Contact"
    },

    // The entire schedule
    schedule: [
    //   {
    //     name: "Check-in / Breakfast",
    //     time: "9h00"
    //   },
    //   {
    //     name: "Linus Torvalds",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Linux Foundation",
    //     link: {
    //       href: "http://twitter.com/linus",
    //       text: "@linus"
    //     },
    //     presentation: {
    //       title: "Digging into a Linux Kernel",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "10h00"
    //     }
    //   },
    //   {
    //     name: "Bill Gates",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Microsoft",
    //     link: {
    //       href: "http://github.com/billy95",
    //       text: "@billy95"
    //     },
    //     presentation: {
    //       title: "Introducing Windows 12",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "11h00"
    //     }
    //   },
    //   {
    //     name: "Lunch",
    //     time: "12h00"
    //   },
    //   {
    //     name: "Chuck Norris",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Delta Command",
    //     link: {
    //       href: "http://twitter.com/littlechuck",
    //       text: "@littlechuck"
    //     },
    //     presentation: {
    //       title: "How to kill a elephant with one finger",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "13h00"
    //     }
    //   },
    //   {
    //     name: "Steve Jobs",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Apple, Inc.",
    //     link: {
    //       href: "http://github.com/stevie",
    //       text: "@stevie"
    //     },
    //     presentation: {
    //       title: "Presenting iPad",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "14h00"
    //     }
    //   },
    //   {
    //     name: "Coffee-break",
    //     time: "15h00"
    //   },
    //   {
    //     name: "Mark Zuckerberg",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Facebook",
    //     link: {
    //       href: "http://twitter.com/zuck",
    //       text: "@zuck"
    //     },
    //     presentation: {
    //       title: "Revealing Facebook Secrets",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "16h00"
    //     }
    //   },
    //   {
    //     name: "Steve Wozniak",
    //     photo: "themes/yellow-swan/img/speaker.jpg",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //     company: "Apple, Inc.",
    //     link: {
    //       href: "http://twitter.com/woz",
    //       text: "@woz"
    //     },
    //     presentation: {
    //       title: "Why do I prefer Android over iPhone",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    //       time: "17h00"
    //     }
    //   }
    ],

    // List of Sponsors
    sponsors: [
    //   {
    //     name: "Eventick",
    //     logo: "themes/yellow-swan/img/sponsor.png",
    //     url: "http://eventick.com.br"
    //   }
    ],

    // List of Partners
    partners: [
        {
            name: "BrazilJS",
            logo: "themes/gojs.org/img/partner_braziljs.png",
            url: "http://braziljs.org"
        }, {
            name: "FGSL",
            logo: "themes/gojs.org/img/partner_fgsl.jpg",
            url: "http://www.fgsl.com.br"
        }, {
            name: "ASL",
            logo: "themes/gojs.org/img/partner_asl.png",
            url: "http://aslgo.org.br/"
        }, {
            name: "Grão JS",
            logo: "themes/gojs.org/img/partner_graojs.png",
            url: "https://github.com/synackbr/graojs"
        }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
