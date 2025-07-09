function Greetings({ name }: { name?: string }) {
    return <p>Helo , {name || 'Guest'}!</p>;
}

export default Greetings;
