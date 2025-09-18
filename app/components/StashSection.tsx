"use client";

const StashSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-8 sm:mb-12 brutal-shadow">
          MY<span className="text-primary">/</span>STASH
        </h2>
        <p className="font-mono text-lg mb-8">
          SOME <span className="bg-primary text-primary-foreground px-2">NEAT</span> STUFF
        </p>

        <div className="grid gap-6">
          {/* Paginated Query */}
          <div className="brutal-card p-6 bg-background hover:translate-x-2 hover:translate-y-2 transition-transform max-w-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-mono uppercase mb-2">
                  <span className="text-primary">01.</span> PAGINATED QUERY
                </h3>
                <p className="font-mono text-sm opacity-80">
                  TYPE-SAFE PAGINATION FOR DRIZZLE ORM
                </p>
              </div>
              <span className="bg-brutal-green text-black px-2 py-1 brutal-border text-xs font-mono">
                TYPESCRIPT
              </span>
            </div>

            <div className="bg-muted p-4 brutal-border mb-4">
              <code className="font-mono text-xs">
                <span className="text-secondary">const</span> result = <span className="text-primary">await</span> <span className="text-accent">paginatedQuery</span>({`{`}<br/>
                &nbsp;&nbsp;table: users,<br/>
                &nbsp;&nbsp;page: 1,<br/>
                &nbsp;&nbsp;limit: 10<br/>
                {`}`});
              </code>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="font-mono text-xs bg-muted text-foreground px-2 py-1 brutal-border">DRIZZLE</span>
              <span className="font-mono text-xs bg-muted text-foreground px-2 py-1 brutal-border">POSTGRESQL</span>
              <span className="font-mono text-xs bg-muted text-foreground px-2 py-1 brutal-border">PAGINATION</span>
            </div>

            <a
              href="https://gist.github.com/therealsuji/622143da6a8ffd5ada1a8c11a12ebcbd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-primary text-primary-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                VIEW GIST →
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StashSection;