import "./Gallery.css"
import { useTranslation } from "react-i18next";
import { useState } from "react";

// importar todas as imagens da pasta assets/images/gallery
const images = import.meta.glob('../../assets/images/gallery/*.jpg', { eager: true });

// Criar um array de objetos com src e titulo para cada imagem
const imageList = Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop() || "";
    const fileKey = fileName.replace('.jpg', '');
    
    return {
        src: (module as { default: string }).default, fileKey
    };
});

function Gallery() {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<null | typeof imageList[0]>(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setSelected(null);
    };
    
    return (
        <main className="page">
            <h1 className="gallery-headline">{t('gallery.title')}</h1>
            <section id="gallery" className="gallery">
                {imageList.map((img, idx) => {
                    const translatedTitle = t(`gallery.images.${img.fileKey}.title`);
                    
                    return (
                        <div className="gallery-item" key={idx} onClick={() => setSelected(img)}>
                            <img src={img.src} alt={translatedTitle} loading="lazy" />
                            <div className="gallery-item-title">{translatedTitle}</div>
                        </div>
                    );
                })}
            </section>

            {selected && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-window">
                        <button className="modal-close" onClick={() => setSelected(null)}>×</button>
                        <div className="modal-content">
                            <div className="modal-image">
                                <img src={selected.src} alt={t(`gallery.images.${selected.fileKey}.title`)} />
                            </div>
                            <div className="modal-description">
                                <h3>{t(`gallery.images.${selected.fileKey}.title`)}</h3>
                                <p>{t(`gallery.images.${selected.fileKey}.specialities`)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Gallery
