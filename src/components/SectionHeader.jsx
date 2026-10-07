const SectionHeader = ({ index, file, title, children }) => (
  <div className="mb-12 max-w-2xl">
    <p className="font-mono text-xs text-faint">
      <span className="text-accent">{index}</span> // {file}
    </p>
    <h2 className="mt-2 font-mono text-2xl font-semibold tracking-tight text-bright sm:text-3xl">
      {title}
    </h2>
    {children && <p className="mt-3 text-dim">{children}</p>}
  </div>
);

export default SectionHeader;
