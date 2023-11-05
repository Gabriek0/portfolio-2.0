export interface TranslationContent {
  language: string;
  header: {
    mobile: {
      navigation: string;
    };
    home: string;
    aboutMe: string;
    experience: string;
    projects: string;
  };
  banner: {
    hi: string;
    developer: string;
  };
  aboutMe: {
    title: string;
    location: string;
    text: string;
    buttonCv: string;
  };
  experience: {
    title: string;
    localsig: {
      title: string;
      date: {
        feb: string;
        apr: string;
      };
      text: string;
    };
    youDevelop: {
      title: string;
      date: {
        apr: string;
        currently: string;
      };
      text: string;
    };
  };
  projects: {
    title: string;
    "remix-expenses": {
      description: string;
    };
    "ignite-call": {
      description: string;
    };
    ignews: {
      description: string;
    };
    worldTrip: {
      description: string;
    };
    buttonView: string;
    buttonTechnologies: string;
  };
}
