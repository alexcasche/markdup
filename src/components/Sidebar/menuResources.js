import { faFileAlt, faLink } from '@fortawesome/free-solid-svg-icons'

const menuResources = () => {
  return {
    title: 'resources',
    icon: faFileAlt,
    links: [
      {
        title: 'Markdown Guide',
        linkProps: { target: '_blank', href: 'https://www.markdownguide.org/' },
      },
      {
        title: 'Github Repository',
        linkProps: {
          target: '_blank',
          href: 'https://github.com/alexcasche/markdup',
        },
      },
    ],
    linkIcon: faLink,
  }
}

export default menuResources
