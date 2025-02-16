import Image from 'next/image';

const Project = ({ name, img, repo, technologies }) => {
  return (
    <div className="text-center bg-white shadow-lg rounded-xl p-5 transition-transform transform cursor-pointer">
      <div className="w-full h-60 overflow-hidden rounded-t-xl">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className="w-full object-cover object-top"
        />
      </div>
      <h3 className="text-5xl font-bold mt-4 text-primary-200 w-full">
        {name}
      </h3>
      <div className="mt-2 text-sm text-gray-600">
        <p>Stack:</p>
        <ul className="flex justify-center gap-4 flex-wrap pt-5">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        {Array.isArray(repo) ? (
          repo.map((r, index) => (
            <a
              key={index}
              href={'https://github.com/corgab' + r}
              className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4 mt-2 inline-block pt-7 px-4"
              target="_blank"
            >
              <Image
                src="/github.svg"
                alt={name}
                width={50}
                height={50}
                className="w-full h-full"
              />
            </a>
          ))
        ) : (
          <a
            href={'https://github.com/corgab' + repo}
            className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4 mt-2 inline-block pt-7"
            target="_blank"
          >
            <Image
              src="/github.svg"
              alt={name}
              width={50}
              height={50}
              className="w-full h-full"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      name: 'Gestione Utenti',
      img: '/projects/gestione-utenti.jfif',
      repo: '/user-management-app',
      technologies: ['Express.js', 'Node.js', 'MySQL'],
    },
    {
      name: 'CMS',
      img: '/projects/CMS.jfif',
      repo: ['/kigab-restaurant-front', '/kigab-restaurant', '/kigab-home'],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind', 'Bootstrap'],
    },
    {
      name: 'Deliveboo',
      img: '/projects/deliveboo.png',
      repo: '/deliveboo-api',
      technologies: ['Laravel', 'Vue.js', 'Bootstrap'],
    },
  ];

  return (
    <div className="container mx-auto min-h-96 w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mt-12">
        {projects.map((proj, index) => (
          <Project
            key={index}
            name={proj.name}
            img={proj.img}
            repo={proj.repo}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </div>
  );
}
