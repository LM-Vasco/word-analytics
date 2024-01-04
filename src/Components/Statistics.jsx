function Statistics({ stats }) {
    return (
        <section className="statistics">
            <Statistic number={stats.numberOfWords} label={"Words"} />
            <Statistic number={stats.numberOfCharacters} label={"Characters"} />
            <Statistic number={stats.instagramCharactersLeft} label={"Instagram"} />
            <Statistic number={stats.facebookCharactersLeft} label={"Facebook"} />
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