export type Project = {
    name:        string;
    description: string;
    stack:       string[];
    sourceCode:  string;
    liveDemo:    string;
}

const projects = [
    {
        name: 'Plantify',
        description: 'A plant care management web app for plant lovers developed for the 4th semester project at VIA University College.',
        stack: ['TypeScript', 'Next.js', 'JavaScript', 'React'],
        sourceCode: 'https://github.com/RafaelSanchezCordoba/SEP4-Plantify',
        liveDemo: 'https://portfolio-rafaelsanchezcordoba.vercel.app/'
    },
    {
        name: 'Pokedex',
        description: 'A Pokedex web app that uses the PokeAPI to display information about the pokemons.',
        stack: ['JavaScript', 'React'],
        sourceCode: 'https://github.com/RafaelSanchezCordoba/pokedex',
        liveDemo: 'https://rafaelsanchezcordoba.github.io/pokedex/'
    },
]

export default projects;