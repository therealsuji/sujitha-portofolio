"use client";

import { stashItems } from "../data/stash";
import StashCard from "./StashCard";

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
          {stashItems.map((item, index) => (
            <StashCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StashSection;