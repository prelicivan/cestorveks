import './Partners.css'
import img1 from "/images/partners/BossConstruction.jpg"
import img2 from "/images/partners/RAG logo-Osnovni-Small.png"
import img3 from "/images/partners/tekgas (1).png"

function Partners() {
    return (
        <div className="partners-component">
            <div className="partners-header">
                Naši partneri
            </div>
            <div className="partners-list">
                <div className="partner">
                    <a href="https://www.linkedin.com/company/bossconstruction/?originalSubdomain=rs" target="_blank" rel="noopener noreferrer" className="partner-link">
                        <img src={img1} />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://reg.co.rs/" target="_blank" rel="noopener noreferrer" className="partner-link">
                            <img src={img2} />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://www.tekgas.co.rs/" target="_blank" rel="noopener noreferrer" className="partner-link">
                        <img src={img3} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partners;