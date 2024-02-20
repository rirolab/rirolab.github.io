import React from 'react';
import NavBar from 'src/components/NavBar';

export default function ResearchLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    const ROOT = 'RESEARCH'
    const MENU = ['topics', 'projects', 'equipments']

    return (
    <section className="w-full py-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold my-4">{ROOT}</h1>
        <NavBar root={ROOT} menu={MENU} />
        {children}
    </section>
  );
}
