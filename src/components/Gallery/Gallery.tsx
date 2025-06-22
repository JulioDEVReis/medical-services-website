import "./Gallery.css"

// importar todas as imagens da pasta assets/images/gallery
const images = import.meta.glob('../../assets/images/gallery/*.jpg', { eager: true });

// Criar um array de objetos com src e titulo para cada imagem
const imageList = Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop() || "";
    const title = fileName.replace(/_/g, ' ').replace('.jpg', '');
    
    return {
        src: (module as { default: string }).default, title
    };
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
