import './FourCard.css'

function FourCard() {
    return (
        <section className="features">
            <header className="features__header">
                <h1 className="features__title">
                    <span className="features__title--light">Reliable, efficient delivery</span><br />
                    <span className="features__title--bold">Powered by Technology</span>
                </h1>
                <p className="features__description">
                    Our Artificial Intelligence powered tools use millions of project data points
                    to ensure that your project is successful
                </p>
            </header>

            <div className="features__cards">
                <div className="features__card features__card--supervisor">
                    <h2 className="features__card-title">Supervisor</h2>
                    <p className="features__card-text">
                        Monitors activity to identify project roadblocks
                    </p>
                </div>

                <div className="features__card features__card--team-builder">
                    <h2 className="features__card-title">Team Builder</h2>
                    <p className="features__card-text">
                        Scans our talent network to create the optimal team for your project
                    </p>
                </div>

                <div className="features__card features__card--karma">
                    <h2 className="features__card-title">Karma</h2>
                    <p className="features__card-text">
                        Regularly evaluates our talent to ensure quality
                    </p>
                </div>

                <div className="features__card features__card--calculator">
                    <h2 className="features__card-title">Calculator</h2>
                    <p className="features__card-text">
                        Uses data from past projects to provide better delivery estimates
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FourCard