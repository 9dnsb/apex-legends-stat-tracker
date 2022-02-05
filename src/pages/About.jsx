function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">About</h1>
      <p className="mb-4 text-2xl font-light">
        This project is made using React. It uses Axios to make network calls to
        an{' '}
        <a
          href="https://apexlegendsapi.com/index.php"
          className="text-secondary"
        >
          Apex Legends API
        </a>{' '}
        Context, Reduce, and Actions are used to manage the state and data.
      </p>
    </>
  )
}

export default About
