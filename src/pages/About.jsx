function About() {
  return (
    <>
      <h1 className="text-6xl mb-4 mt-5">About</h1>
      <p className="mb-4 text-2xl font-light">
        This project is made using React, Tailwind, and daisyUI. It uses Axios
        to make network calls to an{' '}
        <a
          href="https://apexlegendsapi.com/index.php"
          className="text-accent"
          target="_blank"
          rel="noreferrer"
        >
          Apex Legends API
        </a>
        {'. '}
        Context, Reducer, and Actions are used to manage the state and data.
      </p>
      <p className="mb-4 text-2xl font-light">
        I have tried to make the code as clean as possible. It can be viewed on{' '}
        <a
          href="https://github.com/9dnsb/apex-legends-stat-tracker"
          className="text-accent"
          target="_blank"
          rel="noreferrer"
        >
          my Github repository
        </a>
      </p>
    </>
  )
}

export default About
