import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      
      <main className="container">
        <Card 
          imagem="public/camaroamaelo.jpeg"
          titulo="Camaro Amarelo"
          descricao="Ele é um muscle car icônico da Chevrolet, com design esportivo, linhas agressivas e imponente presença na estrada."
        />
        <Card 
          imagem="public/fusca preto.webp"
          titulo="Fusca Preto"
          descricao="FUSCAO PRETOOOOOOOOOO"
        />
        <Card 
          imagem="public/kombi.jpg"
          titulo="Kombi"
          descricao="A Volkswagen Kombi é um dos veículos mais clássicos e queridos do Brasil. Conhecida como “perua” ou “pão de forma”, ela marcou gerações com seu design simples, robusto e versátil."
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
