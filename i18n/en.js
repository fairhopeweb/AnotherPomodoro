export default {
  index: {
    app_description: 'Free Pomodoro timer right in your browser',
    alt: {
      img: {
        screenshot: 'Screenshot of a timer running in AnotherPomodoro',
        icon: 'The app\'s icon'
      },
      links: {
        source: 'View on GitHub',
        support: 'Buy the author a coffee',
        share: {
          twitter: 'Follow the app on Twitter',
          facebook: 'Share the app on Facebook',
          reddit: 'Share the app on Reddit'
        }
      }
    },
    launch: 'Launch',
    cta: {
      quickstart: 'Quickstart',
      or: 'or',
      configure: 'Setup wizard'
    },
    features: {
      0: {
        title: 'Focused, clean interface',
        description: 'Just your timer, the essential controls and a bunch of customizations'
      },
      1: {
        title: 'Nothing to install',
        description: 'Runs in your browser, entirely offline after launch'
      },
      2: {
        title: 'Free & open-source',
        description: 'No hidden trackers, everyone can view and contribute to the code'
      }
    },
    section_whatitdoes: {
      title: 'What does it do?',
      subtitle: {
        main: '{0} helps you keep track of your time.',
        sub: 'Just work or take a break when it says so.'
      },
      cards: [
        {
          title: 'Work',
          description: 'Time to get things done',
          duration: '25 minutes'
        },
        {
          title: 'Short pause',
          description: 'Watch a video, read an article, drink a coffee',
          duration: '5-15 minutes'
        },
        {
          title: 'Long pause',
          description: 'Take a nap or go for a walk',
          duration: '15 minutes'
        }
      ]
    },
    faq: {
      title: 'FAQ',
      hint: 'Hint',
      accordion: {
        change_timers: {
          q: 'Can I change those timers?',
          a: 'Absolutely! You can change the work, pause and long pause timers to whatever you want! You can also change how frequent long pauses are!'
        },
        will_it_help: {
          q: 'Will this app help me?',
          a: 'That depends on you. This app tries hard to create a motivating environment with its clean design and flexibility, but it\'s up to you whether you follow the schedule it gives you.',
          hint: 'If you realize you can\'t work 25 minutes straight or a break of 5 minutes is too short, adjust them to something more comfortable. Don\'t give up, follow a more relaxed schedule and progressively go stricter.'
        },
        data_collection: {
          q: 'Does it collect any data?',
          a: 'Nope! The app runs only in your browser, no data is being collected or sent anywhere!'
        },
        remember_settings: {
          q: 'How will it remember my settings then?',
          a: 'It relies on your browser to do that. If you clear your browser data, the app\'s settings will revert to their defaults, too.',
          hint: 'If you want to keep your settings, don\'t use the app in private browsing (incognito mode).'
        },
        need_to_know: {
          q: 'So what do I need to know to use this app?',
          a: 'Absolutely nothing. If you don\'t want to delve into the settings, just start the timer and listen for the audio chime when it finishes. Once it\'s done, start the next timer when you\'re ready. No knowledge is necessary to use this timer, just pay attention to the time left!'
        },
        timer_style: {
          q: 'Which timer style should I use?',
          a: 'That depends on how obscure you want the timer to be. Traditional looks like "12:34" (seconds-precision), approximate looks like "13 minutes" and percentage looks like "50%".'
        }
      }
    },
    section_features: {
      title: 'Feature list',
      list: {
        customization: 'Customization',
        notifications: 'Audio & Notifications',
        flexible: 'Flexible',
        pwa: 'Offline',
        opensource: 'Open-source',
        notrackers: 'No trackers',
        noads: 'No ads & pop-ups',
        clean: 'Clean design',
        adaptiveticking: 'Adaptive ticking',
        localization: 'Multiple languages',
        darkmode: 'Dark mode',
        more: '... and more to come'
      }
    },
    support: {
      title: 'Support this project',
      subtitle: {
        0: 'AnotherPomodoro is being developed as a side project with no compensation in mind.',
        1: {
          base: 'If you feel that this is a project worth supporting, please {0}.',
          action: 'do so'
        }
      },
      credits: 'Made with ❤ by Imre Gera'
    }
  },
  setup: {
    head: 'Setup',
    title: 'Let\'s get you started',
    startButton: 'Let\'s go',
    steps: {
      language: {
        title: 'Language'
      },
      preset: {
        title: 'Application preset',
        description: 'These presets enable certain functions in the app so that you can use it the way you feel comfortable.'
      },
      timerpreset: {
        title: 'Timer length',
        description: 'Choose a timer preset that you\'d like to work with.'
      },
      timerstyle: {
        title: 'Timer display',
        description: 'AnotherPomodoro supports three timer styles ranging from seconds-precision to showing only a percentage.'
      },
      permissions: {
        title: 'Permissions',
        description: 'The app can play a sound and send a notification when a timer expires.'
      },
      theme: {
        title: 'Theme',
        description: 'Control how the app looks.'
      },
      tip: {
        title: 'Tip',
        description: 'You\'ll find all the settings by clicking on the cog icon in the top right corner.'
      }
    },
    presets: {
      _values: {
        minimalist: 'Minimalist',
        default: 'Default',
        hardcore: 'Full-fledged'
      },
      _valueDescription: {
        minimalist: 'No distracting items, just a timer in the middle.',
        default: 'The starter settings. Recommended for first time users.',
        hardcore: 'Every feature is enabled so you can have everything in front of you.'
      }
    },
    permissions: {
      audio: 'Audio',
      notifications: 'Notifications'
    },
    theme: {
      _values: {
        light: 'Default',
        dark: 'Dark'
      },
      _valueDescription: {
        light: 'Full of friendly colours',
        dark: 'Less bright, just as productive'
      }
    },
    preview: 'preview'
  },
  section: {
    work: 'Work',
    shortpause: 'Break',
    longpause: 'Long Break',
    wait: 'Waiting'
  },
  controls: {
    play: 'Start or pause the timer',
    stop: 'Reset timer',
    advance: 'Go to next section'
  },
  timer: {
    approximate: {
      hours: 'hour | hours',
      minutes: 'minute | minutes'
    }
  },
  settings: {
    heading: 'Settings',
    tabs: {
      main: 'Main',
      timer: 'Schedule',
      display: 'Display',
      audio: 'Audio',
      about: 'About'
    },
    buttons: {
      close: 'Close',
      reset: 'Reset'
    },
    reset: {
      title: 'Reset settings',
      confirm: 'Reset',
      cancel: 'Cancel'
    },
    scheduleMinTime: 'The minimum allowed time is 5 seconds',
    about: {
      madeby: 'Made by Imre Gera',
      source: 'Source code',
      support: 'Support the project',
      share: 'or share the app on social media:'
    },
    values: {
      lang: {
        _title: 'Language',
        _description: ''
      },
      eventLoggingEnabled: {
        _title: 'Enable event logging',
        _description: ''
      },
      currentTimer: {
        _title: 'Timer style',
        _description: '',
        _values: {
          traditional: 'Traditional',
          approximate: 'Approximate',
          percentage: 'Percentage'
        },
        _valueDescription: {
          traditional: '12:34',
          approximate: '13 minutes',
          percentage: '50%'
        }
      },
      adaptiveTicking: {
        enabled: {
          _title: 'Enable adaptive ticking',
          _description: 'Timer will tick less frequently while in the background'
        }
      },
      schedule: {
        longPauseInterval: {
          _title: 'Long Break interval',
          _description: ''
        },
        numScheduleEntries: {
          _title: 'Number of entries in schedule',
          _description: ''
        },
        visibility: {
          enabled: {
            _title: 'Show schedule',
            _description: ''
          },
          showSectionType: {
            _title: 'Show section type in schedule',
            _description: 'Displays the current section type under the schedule'
          }
        },
        lengths: {
          _title: 'Schedule preset',
          _description: '',
          _values: {
            default: 'Default',
            debug: 'Debug',
            custom: 'Custom'
          },
          _valueDescription: {
            default: '25 minutes work, 5 minutes break',
            debug: 'For debugging purposes',
            custom: 'Set by you'
          },
          work: {
            _title: 'Work',
            _description: ''
          },
          shortpause: {
            _title: 'Break',
            _description: ''
          },
          longpause: {
            _title: 'Long break',
            _description: ''
          }
        }
      },
      performance: {
        showProgressBar: {
          _title: 'Show progress bar',
          _description: 'Show progress behind timer'
        }
      },
      permissions: {
        audio: {
          _title: 'Play audio',
          _description: 'Let the app play sounds when a section is over'
        },
        notifications: {
          _title: 'Notification permissions',
          _description: 'Let the app send you notifications when a section is over'
        }
      },
      audio: {
        volume: {
          _title: 'Audio volume',
          _description: ''
        },
        soundSet: {
          _title: 'Sound set',
          _description: 'Sounds used for notifications',
          _values: {
            musical: 'Musical'
          },
          _valueDescription: {
            musical: 'The default sounds'
          }
        }
      },
      timerControls: {
        enableKeyboardShortcuts: {
          _title: 'Enable keyboard shortcuts',
          _description: 'Start/pause the timer with the space key'
        }
      },
      tasks: {
        enabled: {
          _title: 'Enable task list',
          _description: 'Manage your work right from the app'
        },
        maxActiveTasks: {
          _title: 'Maximum active tasks to show',
          _description: 'You\'ll only see this many active tasks at most'
        },
        removeCompletedTasks: {
          _title: 'Remove completed tasks',
          _description: 'Tasks completed will be removed when a new section begins'
        }
      },
      pageTitle: {
        useTickEmoji: {
          _title: 'Use tick emoji in title',
          _description: 'Show ✔ instead of "done"'
        }
      },
      visuals: {
        darkMode: {
          _title: 'Enable dark mode',
          _description: 'Less bright, just as productive'
        }
      },
      reset: {
        _title: 'Reset settings',
        _description: 'All settings will be reset after the app is reloaded'
      }
    }
  },
  notification: {
    action: {
      ready: 'Let\'s go!'
    },
    work: {
      title: 'Time to get back to work!',
      body: 'Your break is over. Work some more, then rest again.'
    },
    shortpause: {
      title: 'Time for a break',
      body: 'Nice, you\'ve earned a short break.'
    },
    longpause: {
      title: 'Whew! More spare time!',
      body: 'Well-well. After working this much, you deserve a longer break.'
    }
  },
  error: {
    format_invalid: 'Invalid input format',
    range_invalid: 'Value must be between {min} and {max}',
    required: 'This field must be filled',
    numeric: 'Value must be a number',
    min: 'Value must be at least {min}',
    max: 'Value must be at most {max}',
    time_format: 'Incorrectly formatted time (MM:SS)',
    min_time: 'The input time is too short',
    undefined: 'Undefined error'
  },
  tasks: {
    title: 'Tasks',
    empty: 'No tasks yet',
    manage: 'Manage'
  },
  ready: 'Done',
  errorpage: {
    title: {
      crash: 'The app crashed',
      notfound: 'That page does not exist',
      other: 'Something went wrong'
    },
    action: {
      reset: 'Reset the app',
      reload: 'Reload the page',
      home: 'Go back to the home page',
      githubIssue: 'File a bug report',
      githubDiscussion: 'Ask others if they have the same issue',
      twitter: 'Write a friendly tweet'
    },
    showError: {
      main: 'Show me the error message!',
      sub: 'I\'ll use it to report an issue or ask if others experience it, too.'
    },
    suggestions: {
      primary: 'You can',
      secondary: 'or if those didn\'t help'
    }
  },

  timerpreset: {
    _values: {
      default: 'Default',
      easy: 'Beginner',
      advanced: 'Advanced',
      workaholic: 'Workaholic'
    },
    _valueDescription: {
      default: 'The default Pomodoro values.',
      easy: 'For those who haven\'t yet tried the Pomodoro technique.',
      advanced: 'Work slightly more effectively.',
      workaholic: 'For long work sessions.'
    },
    description: '{brief} \n {worklength} minutes of work with {splength} minutes short and {lplength} minutes long breaks after every {lpfreq} work sessions.'
  }
}
