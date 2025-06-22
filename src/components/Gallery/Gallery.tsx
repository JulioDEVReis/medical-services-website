import "./Gallery.css"

// importar todas as imagens da pasta assets/images/gallery
const images = import.meta.glob('../../assets/images/gallery/*.jpg', { eager: true });

// Criar um array de objetos com src e titulo para cada imagem
const imageList = Object.entries(images).map(([path, module]) => {
    // Verificar se module é um objeto e tem propriedade default
    if (module && typeof module == 'object' && 'default' in module) {
        // Extrai o nome do arquivo e converte para um titulo da imagem
        const title = path.split('/').pop().replace(/_/g, ' ').replace('.jpg', '');
        return { src: module.default, title};
    }
    // Caso não seja válido retorna branco
    return { src: '', title: ''};
});

function Gallery() {
  return (
    <main className="page">
        <h1 className="gallery-headline">Medical Services</h1>
        <section id="gallery" className="gallery">
            {imageList.map(({ src, title }, idx) => (
                <div className="gallery-item" key={idx}>
                    <img src={src} alt={title} loading="lazy" />
                    <div className="gallery-item-title">{title}</div>
                </div>
            ))}
        </section>
    </main>
  )
}

export default Gallery
