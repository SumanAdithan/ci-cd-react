function Greetings({ name }: { name?: string }) {
    return <p>Hello , {name || 'Guest'}!</p>;
}

export default Greetings;
