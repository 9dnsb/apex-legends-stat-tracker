function PageHeader({ title }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 sm:mb-5 mt-5 text-center">
        {title}
      </h1>
      <p className="text-center">
        Data from{' '}
        <a
          href="https://apexlegendsstatus.com"
          className="text-accent"
          target="_blank"
          rel="noreferrer"
        >
          apexlegendsstatus.com
        </a>
      </p>
    </div>
  )
}

export default PageHeader
