function Statistics({ numberOfCharacters }) {
    return (
        <section className="statistics">
            <Statistic number={numberOfCharacters} label={"Words"} />
            <Statistic number={0} label={"Characters"} />
            <Statistic number={280} label={"Instagram"} />
            <Statistic number={2200} label={"Facebook"} />
        </section>
    )
}

export default Statistics

function Statistic({ number, label }) {
    return (
        <section className="stat">
            <span className="stat__number">{number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}