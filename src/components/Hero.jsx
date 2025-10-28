import imagemFundoHero from "../assets/img/lixo-hero.avif";

export default function Hero() {
    return (
        <section
            className="d-flex align-items-center justify-content-center text-center text-white"
            style={{
                backgroundImage: `url(${imagemFundoHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                position: "relative",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Camada de escurecimento */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            ></div>

            {/* Conteúdo */}
            <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
                <h1
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#1CDF64",
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                    }}
                >
                    Descarte Consciente de Lixo Eletrônico
                </h1>
                <p
                    style={{
                        fontSize: "1.25rem",
                        maxWidth: "600px",
                        margin: "20px auto 0",
                        color: "#e0e0e0",
                    }}
                >
                    Saiba como pequenas atitudes podem transformar o impacto ambiental e ajudar na reciclagem de resíduos eletrônicos.
                </p>
            </div>
        </section>
    );
}
